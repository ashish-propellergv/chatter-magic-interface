
import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useVoiceAgent } from '@/context/VoiceAgentContext';
import { cn } from '@/lib/utils';

const ConversationDisplay: React.FC = () => {
  const { messages } = useVoiceAgent();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  return (
    <Card className="w-full h-[400px] bg-background border">
      <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
        <CardContent className="space-y-4 pt-4">
          {messages.length === 0 ? (
            <p className="text-center text-muted-foreground italic">
              Your conversation will appear here. Start by clicking the microphone button below.
            </p>
          ) : (
            messages.map((message) => (
              <div 
                key={message.id}
                className={cn(
                  "flex max-w-[80%] rounded-lg p-4",
                  message.sender === 'user' 
                    ? "bg-primary text-primary-foreground ml-auto" 
                    : "bg-muted text-muted-foreground mr-auto"
                )}
              >
                <p>{message.text}</p>
              </div>
            ))
          )}
        </CardContent>
      </ScrollArea>
    </Card>
  );
};

export default ConversationDisplay;
