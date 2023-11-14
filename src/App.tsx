import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/index';
import { AppThemeProvider } from './shared/contexts/ThemeContext';
import { MenuLateral } from './shared/components/menu-lateral/MenuLateral';
import { DrawerProvider } from './shared/contexts';

function App() {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>

          <MenuLateral>
            <AppRoutes/>
          </MenuLateral>

        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
}

export default App;
