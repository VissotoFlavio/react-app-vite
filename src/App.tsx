import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ToastProvider } from './components/toast/toast.provider';
import { AppContainer, AppContent, AppWrapper } from './styles/container';
import { GlobalStyle } from './styles/global.style';
import { theme } from './styles/theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastProvider>
        <AppContainer>
          <AppContent>
            <AppWrapper>
              <Outlet />
            </AppWrapper>
          </AppContent>
        </AppContainer>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
