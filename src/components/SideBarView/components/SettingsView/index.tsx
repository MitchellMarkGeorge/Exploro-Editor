import React from "react";
import { ViewContainer } from "../ViewContainer";
import { ViewHeader } from "../ui";
import SettingsViewItem from "./SettingsViewItem";
import { useAppState } from "@/stores/AppState";

export default function SettingsView() {
  const settings = useAppState((state) => state.settings);
  const updateSettings = useAppState((state) => state.updateSettings);

  const toggleAutosave = () => {
    updateSettings({ autoSaveCode: !settings.autoSaveCode });
  };
  const toggleASTPreview = () => {
    updateSettings({ toggleAstPreview: !settings.toggleAstPreview });
  };
  const toggleEnableLineNumbers = () => {
    updateSettings({ enableLineNumbers: !settings.enableLineNumbers });
  };
  const toggleEnableBracketMatching = () => {
    updateSettings({ enableBracketMatching: !settings.enableBracketMatching });
  };
  const toggleEnableCloseBrackets = () => {
    updateSettings({ enableCloseBrackets: !settings.enableCloseBrackets });
  };

  return (
    <ViewContainer>
      <ViewHeader>Settings</ViewHeader>
      <SettingsViewItem
        settingName="Autosave Code"
        isChecked={settings.autoSaveCode}
        onClick={toggleAutosave}
      />
      <SettingsViewItem
        settingName="Toggle AST Preview"
        isChecked={settings.toggleAstPreview}
        onClick={toggleASTPreview}
      />
      <SettingsViewItem
        settingName="Enable Line Numbers"
        isChecked={settings.enableLineNumbers}
        onClick={toggleEnableLineNumbers}
      />
      <SettingsViewItem
        settingName="Enable Bracket Matching"
        isChecked={settings.enableBracketMatching}
        onClick={toggleEnableBracketMatching}
      />
      <SettingsViewItem
        settingName="Enable Close Brackets"
        isChecked={settings.enableCloseBrackets}
        onClick={toggleEnableCloseBrackets}
      />
    </ViewContainer>
  );
}
