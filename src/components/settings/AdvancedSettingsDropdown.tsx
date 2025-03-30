
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Settings } from 'lucide-react';
import { useVoiceAgent } from '@/context/VoiceAgentContext';

const AdvancedSettingsDropdown: React.FC = () => {
  const { config, updateConfig } = useVoiceAgent();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="w-full justify-between">
          <div className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span>Options</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Advanced Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={config.allowInterruptions}
          onCheckedChange={(checked) => updateConfig({ allowInterruptions: checked })}
        >
          Allow Interruptions
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={config.filterBackgroundNoise}
          onCheckedChange={(checked) => updateConfig({ filterBackgroundNoise: checked })}
        >
          Filter Background Noise
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AdvancedSettingsDropdown;
