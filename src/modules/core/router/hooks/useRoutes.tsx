import * as React from 'react';
import { Routes } from '../types';

import RecipeListRoute from 'src/modules/recipe/modules/recipe-list/containers/RecipeListRoute';
import RecipeDetailRoute from 'src/modules/recipe/modules/recipe-detail/containers/RecipeDetailRoute';
import RecipeCreateRoute from 'src/modules/recipe/modules/recipe-create/containers/RecipeCreateRoute';
import RecipeUpdateRoute from 'src/modules/recipe/modules/recipe-update/containers/RecipeUpdateRoute';

export default function useRoutesParams(): Routes {
  return React.useMemo(
    () => [
      { path: '/recipes', element: <RecipeListRoute /> },
      { path: '/recipes/:id', element: <RecipeDetailRoute /> },
      { path: '/recipes/create', element: <RecipeCreateRoute /> },
      { path: '/recipes/update/:id', element: <RecipeUpdateRoute /> },
    ],
    [],
  );
}
