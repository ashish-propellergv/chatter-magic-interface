
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff } from 'lucide-react';
import { useVoiceAgent } from '@/context/VoiceAgentContext';

interface MicButtonProps {
  className?: string;
}

const MicButton: React.FC<MicButtonProps> = ({ className }) => {
  const { isListening, setIsListening } = useVoiceAgent();

  const toggleListening = () => {
    setIsListening(!isListening);
    // Note: In a real implementation, you would connect to your backend here
    console.log(`Microphone ${!isListening ? 'activated' : 'deactivated'}`);
  };

  return (
    <Button
      onClick={toggleListening}
      variant={isListening ? "destructive" : "default"}
      size="lg"
      className={`rounded-full w-16 h-16 flex items-center justify-center ${className}`}
      aria-label={isListening ? "Stop listening" : "Start listening"}
    >
      {isListening ? <MicOff className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
    </Button>
  );
};

export default MicButton;
