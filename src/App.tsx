import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { RouterRoutes } from '~recipe/core';
import theme from './modules/ui/Theme/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <RouterRoutes NotFound={<div>404</div>} />
  </ThemeProvider>
);

export default App;
