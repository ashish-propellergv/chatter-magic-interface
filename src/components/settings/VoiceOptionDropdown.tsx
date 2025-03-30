
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
import { Volume } from 'lucide-react';
import { useVoiceAgent } from '@/context/VoiceAgentContext';
import { voiceOptions, VoiceOption } from '@/config/voiceAgentConfig';

const VoiceOptionDropdown: React.FC = () => {
  const { config, updateConfig } = useVoiceAgent();

  return (
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
  );
};

export default VoiceOptionDropdown;
