import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import * as types from '../types';

export interface Props {
  routes: types.Routes;
  NotFound: React.ReactElement;
}

const RouterRoutes = ({ routes, NotFound }: Props): React.ReactElement => (
  <BrowserRouter>
    <Routes>
      {routes.map(
        (route: types.Route): React.ReactNode => (
          <Route key={route.path} {...route} />
        ),
      )}
    </Routes>
  </BrowserRouter>
);

export default RouterRoutes;
