import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import Page from '~recipe/ui/Page';
import { RouterRoutes } from '~recipe/core';

import theme from './modules/ui/Theme/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <RouterRoutes NotFound={<Page title="Not Found: 404" />} />
  </ThemeProvider>
);

export default App;
