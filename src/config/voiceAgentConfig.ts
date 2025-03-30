
export type LLMModel = "gpt-3.5-turbo" | "gpt-4" | "claude-3-opus" | "claude-3-sonnet" | "gemini-pro";
export type STTModel = "whisper" | "google" | "deepgram" | "assembly-ai";
export type TTSModel = "eleven-labs" | "google" | "azure" | "amazon-polly";
export type VoiceOption = "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer";
export type LanguageOption = "english" | "spanish" | "french" | "german" | "chinese" | "japanese";

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
  llmModel: "gpt-3.5-turbo",
  sttModel: "whisper",
  ttsModel: "eleven-labs",
  voice: "nova",
  language: "english",
  allowInterruptions: true,
  filterBackgroundNoise: true,
};

export const llmOptions: LLMModel[] = ["gpt-3.5-turbo", "gpt-4", "claude-3-opus", "claude-3-sonnet", "gemini-pro"];
export const sttOptions: STTModel[] = ["whisper", "google", "deepgram", "assembly-ai"];
export const ttsOptions: TTSModel[] = ["eleven-labs", "google", "azure", "amazon-polly"];
export const voiceOptions: VoiceOption[] = ["alloy", "echo", "fable", "onyx", "nova", "shimmer"];
export const languageOptions: LanguageOption[] = ["english", "spanish", "french", "german", "chinese", "japanese"];
