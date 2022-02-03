import * as React from 'react';

import { RouterRoutes } from '~recipe';

const App = () => {
  return <RouterRoutes NotFound={<div>404</div>} />;
};

export default App;
