
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
import { SlidersHorizontal } from 'lucide-react';
import { useVoiceAgent } from '@/context/VoiceAgentContext';
import { llmOptions, LLMModel } from '@/config/voiceAgentConfig';

const LLMModelDropdown: React.FC = () => {
  const { config, updateConfig } = useVoiceAgent();

  return (
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
  );
};

export default LLMModelDropdown;
