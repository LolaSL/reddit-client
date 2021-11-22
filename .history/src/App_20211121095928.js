import React from 'react';
import Header from './components/header/Header';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles, theme } from './components/theme/temes';

const StyledApp = styled.div`
color: ${props => props.theme.fontColor}`;
function App() {

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} >
      <GlobalStyles />
      <StyledApp>
        <Header />
        <div>Hello</div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
