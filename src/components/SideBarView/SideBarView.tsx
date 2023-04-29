import React from 'react';
import { useWorkspaceState } from '@/stores/WorkspaceState';
import { SideBarItemType } from '@/stores/WorkspaceState/types';
import FileView from './components/FileView';
import SettingsView from './components/SettingsView';
import ThemeView from './components/ThemeView';

export default function SideBarView() {
    const selectedSideBarItem = useWorkspaceState(state => state.selectedSideBarItem);
    switch (selectedSideBarItem) {
        case SideBarItemType.Files:
            return <FileView/>;
        case SideBarItemType.Settings:
            return <SettingsView/>;
        case SideBarItemType.Theme:
            return <ThemeView/>;
    }
}
