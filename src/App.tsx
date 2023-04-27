import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { defaultDarkTheme } from "./style/themes";
import { GlobalStyle } from "./style/GlobalStyle";
import { Button } from "./components/ui/Button";
import TopBar from "./components/TopBar";

const AppContainer = styled.div`
  height: 100%;
  background-color: ${props => props.theme.colors.background };
  color: ${props => props.theme.colors.primaryText};
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
`

function App() {

  return (
    <ThemeProvider theme={defaultDarkTheme}>
      <GlobalStyle />
      <AppContainer>
        <TopBar/>
        <Button>Click on Me</Button>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
