
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Settings } from 'lucide-react';
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={className}>
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>Voice Agent Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-xs">LLM Model</DropdownMenuLabel>
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
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-xs">Speech-to-Text</DropdownMenuLabel>
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
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-xs">Text-to-Speech</DropdownMenuLabel>
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
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-xs">Voice</DropdownMenuLabel>
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
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-xs">Language</DropdownMenuLabel>
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
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-xs">Advanced Settings</DropdownMenuLabel>
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
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SettingsDropdown;
