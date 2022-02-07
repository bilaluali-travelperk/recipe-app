import * as React from 'react';
import { Routes } from '../types';

import RecipeListRoute from 'src/modules/recipe/modules/recipe-list/containers/RecipeListRoute';

export default function useRoutesParams(): Routes {
  return React.useMemo(
    () => [{ path: '/recipes', element: <RecipeListRoute /> }],
    [],
  );
}
