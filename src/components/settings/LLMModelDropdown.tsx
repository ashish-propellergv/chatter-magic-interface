
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
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { useVoiceAgent } from '@/context/VoiceAgentContext';
import { llmOptions, LLMModel } from '@/config/voiceAgentConfig';

const LLMModelDropdown: React.FC = () => {
  const { config, updateConfig } = useVoiceAgent();

  const getLLMDisplayName = (model: LLMModel): string => {
    switch (model) {
      case 'openai':
        return 'Open AI';
      case 'groq':
        return 'Groq';
      case 'cerebras':
        return 'Cerebras';
      default:
        return model;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="w-full justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            <span>LLM: {getLLMDisplayName(config.llmModel)}</span>
          </div>
          <ChevronDown className="h-4 w-4 ml-2 opacity-70" />
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
              {getLLMDisplayName(model)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LLMModelDropdown;
