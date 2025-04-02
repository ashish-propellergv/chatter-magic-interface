
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Headphones, ChevronDown } from 'lucide-react';
import { useVoiceAgent } from '@/context/VoiceAgentContext';
import { ttsOptions, TTSModel } from '@/config/voiceAgentConfig';

const TTSModelDropdown: React.FC = () => {
  const { config, updateConfig } = useVoiceAgent();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="w-full justify-between">
          <div className="flex items-center gap-2">
            <Headphones className="h-4 w-4" />
            <span>TTS: {config.ttsModel}</span>
          </div>
          <ChevronDown className="h-4 w-4 ml-2 opacity-70" />
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
              {model === 'openai-4o-mini-tts' ? 'Open AI 4o mini TTS' : 'Cartesia'}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TTSModelDropdown;
