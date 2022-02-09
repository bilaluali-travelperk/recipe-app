import * as React from 'react';
import { Routes } from '../types';

import RecipeListRoute from 'src/modules/recipe/modules/recipe-list/containers/RecipeListRoute';
import RecipeDetailRoute from 'src/modules/recipe/modules/recipe-detail/containers/RecipeDetailRoute';
import RecipeCreateRoute from 'src/modules/recipe/modules/recipe-create/containers/RecipeCreateRoute';

export default function useRoutesParams(): Routes {
  return React.useMemo(
    () => [
      { path: '/recipes', element: <RecipeListRoute /> },
      { path: '/recipes/:id', element: <RecipeDetailRoute /> },
      { path: '/recipes/create', element: <RecipeCreateRoute /> },
    ],
    [],
  );
}
