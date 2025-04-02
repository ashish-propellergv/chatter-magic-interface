
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
  metrics: Metrics;
  updateMetrics: (metrics: Partial<Metrics>) => void;
}

export interface Metrics {
  latency: number | null;
  cost: number | null;
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
  const [metrics, setMetrics] = useState<Metrics>({ latency: null, cost: null });

  const updateConfig = (newConfig: Partial<VoiceAgentConfig>) => {
    setConfig((prevConfig) => ({ ...prevConfig, ...newConfig }));
  };

  const updateMetrics = (newMetrics: Partial<Metrics>) => {
    setMetrics((prevMetrics) => ({ ...prevMetrics, ...newMetrics }));
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
        metrics,
        updateMetrics,
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
