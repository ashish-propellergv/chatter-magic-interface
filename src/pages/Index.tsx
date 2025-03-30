
import React from 'react';
import MicButton from '@/components/MicButton';
import ConversationDisplay from '@/components/ConversationDisplay';
import SettingsDropdown from '@/components/SettingsDropdown';
import { useVoiceAgent } from '@/context/VoiceAgentContext';
import { Button } from '@/components/ui/button';
import { generateMessageId } from '@/lib/messageUtils';

const Index: React.FC = () => {
  const { isListening, addMessage, clearMessages } = useVoiceAgent();

  // Demo function to simulate sending a message - replace with your actual backend integration
  const simulateUserMessage = () => {
    addMessage({
      id: generateMessageId(),
      text: "Hello, how can you help me today?",
      sender: 'user',
      timestamp: new Date(),
    });

    // Simulate agent response after a delay
    setTimeout(() => {
      addMessage({
        id: generateMessageId(),
        text: "I'm your AI assistant. I can help you with information, tasks, or just have a conversation. What would you like to talk about?",
        sender: 'agent',
        timestamp: new Date(),
      });
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center max-w-3xl mx-auto p-4 space-y-6">
      <header className="w-full flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">AI Voice Assistant</h1>
        <SettingsDropdown />
      </header>

      <ConversationDisplay />

      <div className="w-full flex justify-center items-center gap-4">
        <Button variant="outline" onClick={clearMessages} className="flex-shrink-0">
          Clear Chat
        </Button>
        <Button variant="outline" onClick={simulateUserMessage} className="flex-shrink-0">
          Simulate Message
        </Button>
      </div>

      <div className="pt-6 pb-10 relative">
        <div className={`absolute -inset-4 rounded-full bg-primary/10 transition-opacity duration-300 ${isListening ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        <MicButton className="relative z-10" />
      </div>

      <footer className="text-sm text-muted-foreground text-center">
        <p>Connect this interface to your backend voice agent API</p>
        <p className="mt-1">Current Status: {isListening ? 'Connected' : 'Disconnected'}</p>
      </footer>
    </div>
  );
};

export default Index;
