
export type LLMModel = "groq" | "openai" | "cerebras";
export type STTModel = "whisper" | "google" | "deepgram" | "assembly-ai";
export type TTSModel = "cartesia" | "openai-4o-mini-tts";
export type CartesiaVoiceOption = "indian-woman" | "zia";
export type OpenAIVoiceOption = "shimmer" | "onyx" | "coral";
export type VoiceOption = CartesiaVoiceOption | OpenAIVoiceOption;
export type LanguageOption = "english" | "hindi";

export interface VoiceAgentConfig {
  llmModel: LLMModel;
  sttModel: STTModel;
  ttsModel: TTSModel;
  voice: VoiceOption;
  language: LanguageOption;
  allowInterruptions: boolean;
  filterBackgroundNoise: boolean;
}

export const defaultConfig: VoiceAgentConfig = {
  llmModel: "openai",
  sttModel: "whisper",
  ttsModel: "cartesia",
  voice: "indian-woman",
  language: "english",
  allowInterruptions: true,
  filterBackgroundNoise: true,
};

export const llmOptions: LLMModel[] = ["groq", "openai", "cerebras"];
export const sttOptions: STTModel[] = ["whisper", "google", "deepgram", "assembly-ai"];
export const ttsOptions: TTSModel[] = ["cartesia", "openai-4o-mini-tts"];
export const cartesiaVoiceOptions: CartesiaVoiceOption[] = ["indian-woman", "zia"];
export const openAIVoiceOptions: OpenAIVoiceOption[] = ["shimmer", "onyx", "coral"];
export const languageOptions: LanguageOption[] = ["english", "hindi"];

// Helper function to get voice options based on TTS model
export const getVoiceOptionsForTTSModel = (ttsModel: TTSModel): VoiceOption[] => {
  return ttsModel === "cartesia" ? cartesiaVoiceOptions : openAIVoiceOptions;
};
