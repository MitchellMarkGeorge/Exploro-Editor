import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/GlobalStyle";
import { Button } from "./components/ui/Button";
import TopBar from "./components/TitleBar";
import { useAppState } from "./stores/AppState";
import SideBar from "./components/SideBar";
import Workspace from "./components/Workspace";

const AppContainer = styled.div`
  height: 100%;
  background-color: ${props => props.theme.colors.background };
  color: ${props => props.theme.colors.primaryText};
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
`

function App() {
  const currentTheme = useAppState(state => state.currentTheme);
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <AppContainer>
        <TopBar/>
        <Workspace/>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
