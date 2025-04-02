
import React, { useEffect } from 'react';
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
import { Volume, ChevronDown } from 'lucide-react';
import { useVoiceAgent } from '@/context/VoiceAgentContext';
import { VoiceOption, getVoiceOptionsForTTSModel } from '@/config/voiceAgentConfig';

const VoiceOptionDropdown: React.FC = () => {
  const { config, updateConfig } = useVoiceAgent();
  
  // Get the appropriate voice options based on the selected TTS model
  const voiceOptions = getVoiceOptionsForTTSModel(config.ttsModel);
  
  // Update voice when TTS model changes to ensure compatibility
  useEffect(() => {
    // Check if current voice is valid for the selected TTS model
    if (!voiceOptions.includes(config.voice as any)) {
      // Set to first available voice for the current TTS model
      updateConfig({ voice: voiceOptions[0] });
    }
  }, [config.ttsModel]);

  const formatVoiceName = (voice: string): string => {
    // Convert kebab-case to Title Case with spaces
    return voice
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="w-full justify-between">
          <div className="flex items-center gap-2">
            <Volume className="h-4 w-4" />
            <span>Voice: {formatVoiceName(config.voice)}</span>
          </div>
          <ChevronDown className="h-4 w-4 ml-2 opacity-70" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select Voice for {config.ttsModel === "cartesia" ? "Cartesia" : "OpenAI"}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup 
          value={config.voice} 
          onValueChange={(value) => updateConfig({ voice: value as VoiceOption })}
        >
          {voiceOptions.map((voice) => (
            <DropdownMenuRadioItem key={voice} value={voice}>
              {formatVoiceName(voice)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default VoiceOptionDropdown;
