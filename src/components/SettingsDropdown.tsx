
import React from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Settings, Mic, Headphones, Volume, Globe, Language, SlidersHorizontal } from 'lucide-react';
import { useVoiceAgent } from '@/context/VoiceAgentContext';
import {
  llmOptions,
  sttOptions,
  ttsOptions,
  voiceOptions,
  languageOptions,
  LLMModel,
  STTModel,
  TTSModel,
  VoiceOption,
  LanguageOption,
} from '@/config/voiceAgentConfig';

interface SettingsDropdownProps {
  className?: string;
}

const SettingsDropdown: React.FC<SettingsDropdownProps> = ({ className }) => {
  const { config, updateConfig } = useVoiceAgent();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className={className}>
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4" align="end">
        <div className="space-y-4">
          <h4 className="font-medium text-sm mb-3">Voice Agent Settings</h4>
          
          {/* LLM Model Dropdown */}
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="w-full justify-between">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    <span>LLM Model: {config.llmModel}</span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Select LLM Model</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup 
                  value={config.llmModel} 
                  onValueChange={(value) => updateConfig({ llmModel: value as LLMModel })}
                >
                  {llmOptions.map((model) => (
                    <DropdownMenuRadioItem key={model} value={model}>
                      {model}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Speech-to-Text Dropdown */}
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="w-full justify-between">
                  <div className="flex items-center gap-2">
                    <Mic className="h-4 w-4" />
                    <span>STT Model: {config.sttModel}</span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Select Speech-to-Text Model</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup 
                  value={config.sttModel} 
                  onValueChange={(value) => updateConfig({ sttModel: value as STTModel })}
                >
                  {sttOptions.map((model) => (
                    <DropdownMenuRadioItem key={model} value={model}>
                      {model}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Text-to-Speech Dropdown */}
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="w-full justify-between">
                  <div className="flex items-center gap-2">
                    <Headphones className="h-4 w-4" />
                    <span>TTS Model: {config.ttsModel}</span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Select Text-to-Speech Model</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup 
                  value={config.ttsModel} 
                  onValueChange={(value) => updateConfig({ ttsModel: value as TTSModel })}
                >
                  {ttsOptions.map((model) => (
                    <DropdownMenuRadioItem key={model} value={model}>
                      {model}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Voice Dropdown */}
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="w-full justify-between">
                  <div className="flex items-center gap-2">
                    <Volume className="h-4 w-4" />
                    <span>Voice: {config.voice}</span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Select Voice</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup 
                  value={config.voice} 
                  onValueChange={(value) => updateConfig({ voice: value as VoiceOption })}
                >
                  {voiceOptions.map((voice) => (
                    <DropdownMenuRadioItem key={voice} value={voice}>
                      {voice}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Language Dropdown */}
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="w-full justify-between">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>Language: {config.language}</span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Select Language</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup 
                  value={config.language} 
                  onValueChange={(value) => updateConfig({ language: value as LanguageOption })}
                >
                  {languageOptions.map((language) => (
                    <DropdownMenuRadioItem key={language} value={language}>
                      {language}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Advanced Settings Dropdown */}
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="w-full justify-between">
                  <div className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    <span>Advanced Settings</span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Advanced Settings</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={config.allowInterruptions}
                  onCheckedChange={(checked) => updateConfig({ allowInterruptions: checked })}
                >
                  Allow Interruptions
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={config.filterBackgroundNoise}
                  onCheckedChange={(checked) => updateConfig({ filterBackgroundNoise: checked })}
                >
                  Filter Background Noise
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SettingsDropdown;
