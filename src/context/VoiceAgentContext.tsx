
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { VoiceAgentConfig, defaultConfig } from '../config/voiceAgentConfig';

interface VoiceAgentContextType {
  isListening: boolean;
  setIsListening: (isListening: boolean) => void;
  config: VoiceAgentConfig;
  updateConfig: (config: Partial<VoiceAgentConfig>) => void;
  messages: Message[];
  addMessage: (message: Message) => void;
  clearMessages: () => void;
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

const VoiceAgentContext = createContext<VoiceAgentContextType | undefined>(undefined);

export const VoiceAgentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isListening, setIsListening] = useState(false);
  const [config, setConfig] = useState<VoiceAgentConfig>(defaultConfig);
  const [messages, setMessages] = useState<Message[]>([]);

  const updateConfig = (newConfig: Partial<VoiceAgentConfig>) => {
    setConfig((prevConfig) => ({ ...prevConfig, ...newConfig }));
  };

  const addMessage = (message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <VoiceAgentContext.Provider
      value={{
        isListening,
        setIsListening,
        config,
        updateConfig,
        messages,
        addMessage,
        clearMessages,
      }}
    >
      {children}
    </VoiceAgentContext.Provider>
  );
};

export const useVoiceAgent = (): VoiceAgentContextType => {
  const context = useContext(VoiceAgentContext);
  if (context === undefined) {
    throw new Error('useVoiceAgent must be used within a VoiceAgentProvider');
  }
  return context;
};
