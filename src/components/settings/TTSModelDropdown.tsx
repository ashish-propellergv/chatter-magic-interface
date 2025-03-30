
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
import { Headphones } from 'lucide-react';
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
  );
};

export default TTSModelDropdown;
