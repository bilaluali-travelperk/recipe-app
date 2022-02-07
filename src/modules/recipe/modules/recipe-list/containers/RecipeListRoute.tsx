import * as React from 'react';

import Page from '~recipe/ui/Page';
import RecipesGrid from '~recipe/recipe/containers/RecipesGrid';

import useRecipeQuery from '../hooks/useRecipesQuery';

export interface Props {}

const RecipeListRoute = (props: Props): React.ReactElement => {
  const { data: recipes, error } = useRecipeQuery();

  return (
    <Page title="Recipes Overview">
      {error || (recipes && <RecipesGrid recipes={recipes} />)}
    </Page>
  );
};

export default RecipeListRoute;
