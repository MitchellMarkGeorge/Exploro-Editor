import React from "react";
import { ViewContainer } from "../ViewContainer";
import styled from "styled-components";
import { ViewHeader, ViewHeaderButton } from "../ui";
import { HiPlus } from "react-icons/hi";
import { useAppState } from "@/stores/AppState";
import ThemeViewItem from "./ThemeViewItem";

export default function ThemeView() {
  const currentTheme = useAppState((state) => state.currentTheme);
  return (
    <ViewContainer>
      <ViewHeader>
        <div>Theme</div>
        <ViewHeaderButton>
          <HiPlus size={"1rem"} />
        </ViewHeaderButton>
      </ViewHeader>
      <ThemeViewItem themeItem="Background" color={currentTheme.colors.background}/>
      <ThemeViewItem themeItem="Primary Accent" color={currentTheme.colors.primaryAccent}/>
      <ThemeViewItem themeItem="Secondary Accent" color={currentTheme.colors.secondaryAccent}/>
      <ThemeViewItem themeItem="Top Bar Background" color={currentTheme.colors.topBarBackground}/>
      <ThemeViewItem themeItem="Stroke" color={currentTheme.colors.stroke}/>
      <ThemeViewItem themeItem="Primary Text" color={currentTheme.colors.primaryText}/>
      <ThemeViewItem themeItem="Secondary Text" color={currentTheme.colors.secondaryText}/>
    </ViewContainer>
  );
}
