
import React from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Settings } from 'lucide-react';
import LLMModelDropdown from './settings/LLMModelDropdown';
import STTModelDropdown from './settings/STTModelDropdown';
import TTSModelDropdown from './settings/TTSModelDropdown';
import VoiceOptionDropdown from './settings/VoiceOptionDropdown';
import LanguageDropdown from './settings/LanguageDropdown';
import AdvancedSettingsDropdown from './settings/AdvancedSettingsDropdown';

interface SettingsDropdownProps {
  className?: string;
}

const SettingsDropdown: React.FC<SettingsDropdownProps> = ({ className }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className={className}>
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4" align="end">
        <div className="space-y-4">
          <h4 className="font-medium text-sm mb-3">Voice Agent Settings</h4>
          
          {/* LLM Model Dropdown */}
          <div>
            <LLMModelDropdown />
          </div>
          
          {/* Speech-to-Text Dropdown */}
          <div>
            <STTModelDropdown />
          </div>
          
          {/* Text-to-Speech Dropdown */}
          <div>
            <TTSModelDropdown />
          </div>
          
          {/* Voice Dropdown */}
          <div>
            <VoiceOptionDropdown />
          </div>
          
          {/* Language Dropdown */}
          <div>
            <LanguageDropdown />
          </div>
          
          {/* Advanced Settings Dropdown */}
          <div>
            <AdvancedSettingsDropdown />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SettingsDropdown;
