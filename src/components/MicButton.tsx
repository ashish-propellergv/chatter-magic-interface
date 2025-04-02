
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff } from 'lucide-react';
import { useVoiceAgent } from '@/context/VoiceAgentContext';
import { Progress } from '@/components/ui/progress';

interface MicButtonProps {
  className?: string;
}

const MicButton: React.FC<MicButtonProps> = ({ className }) => {
  const { isListening, setIsListening, metrics, updateMetrics } = useVoiceAgent();

  const toggleListening = () => {
    setIsListening(!isListening);
    // Note: In a real implementation, you would connect to your backend here
    console.log(`Microphone ${!isListening ? 'activated' : 'deactivated'}`);
    
    // Simulate fetching metrics from backend
    if (!isListening) {
      fetchMetricsFromBackend();
    }
  };

  // Simulate fetching metrics from backend
  const fetchMetricsFromBackend = () => {
    // In a real implementation, this would be an API call to your backend
    setTimeout(() => {
      // Simulate random metrics for demo purposes
      const randomLatency = Math.floor(Math.random() * 300) + 50; // 50-350ms
      const randomCost = parseFloat((Math.random() * 0.1).toFixed(4)); // 0-0.1 credits
      updateMetrics({
        latency: randomLatency,
        cost: randomCost
      });
    }, 1000);
  };

  // For demo purposes, update metrics periodically when listening
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isListening) {
      interval = setInterval(fetchMetricsFromBackend, 5000);
    }
    return () => clearInterval(interval);
  }, [isListening]);

  return (
    <div className="flex flex-col items-center">
      <Button
        onClick={toggleListening}
        variant={isListening ? "destructive" : "default"}
        size="lg"
        className={`rounded-full w-16 h-16 flex items-center justify-center ${className}`}
        aria-label={isListening ? "Stop listening" : "Start listening"}
      >
        {isListening ? <MicOff className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
      </Button>
      
      {isListening && (
        <div className="mt-2 text-sm text-center text-muted-foreground">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-xs">Latency:</span>
              <span className="font-mono">{metrics.latency ? `${metrics.latency}ms` : 'Loading...'}</span>
            </div>
            <Progress value={metrics.latency ? Math.min((metrics.latency / 500) * 100, 100) : 0} className="h-1" />
            <div className="flex items-center justify-between mt-1">
              <span className="text-xs">Cost:</span>
              <span className="font-mono">{metrics.cost !== null ? `$${metrics.cost.toFixed(4)}` : 'Loading...'}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MicButton;
