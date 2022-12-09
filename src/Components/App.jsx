import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import styled, { ThemeProvider } from 'styled-components';

import Routes from '../routes';

import { GlobalStyles, lightTheme, darkTheme } from '../styles/globalStyles';

import ToggleTheme from './ToggleTheme/ToggleTheme';

import Nav from './Nav/Nav';

import useThemeMode from '../hooks/useThemeMode';

import 'normalize.css/normalize.css';

const App = () => {
  const [theme, toggleTheme] = useThemeMode();
  const themeMode = theme === 'light' ? darkTheme : lightTheme;

  return (
    <BrowserRouter>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />

        <AppWrapper>
          <ContainerFulHd>
            <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
            <MainWrap>
              <Nav />
              <Routes />
            </MainWrap>
          </ContainerFulHd>
        </AppWrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
};

const AppWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const ContainerFulHd = styled.div`
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
`;

const MainWrap = styled.div`
  padding: 50px;

  @media (max-width: 1200px) {
    padding: 25px 50px 50px 50px;
  }

  @media (max-width: 576px) {
    padding: 25px 30px 30px 30px;
  }
`;

export default App;
