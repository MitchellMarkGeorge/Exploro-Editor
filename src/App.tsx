import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/GlobalStyle";
import TitleBar from "./components/TitleBar";
import { useAppState } from "./stores/AppState";
import Workspace from "./components/Workspace";
import NewFileModal from "./components/modals/NewFile";
import NewPlaygroundModal from "./components/modals/NewPlayground";

const AppContainer = styled.div`
  height: 100%;
  background-color: ${props => props.theme.colors.background };
  color: ${props => props.theme.colors.primaryText};
  display: flex;
  flex-direction: column;
`

function App() {
  const currentTheme = useAppState(state => state.currentTheme);
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      {/* <NewFileModal/> */}
      <NewPlaygroundModal/>
      <AppContainer>
        <TitleBar/>
        <Workspace/>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
