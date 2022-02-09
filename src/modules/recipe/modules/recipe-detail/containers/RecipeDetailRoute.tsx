import * as React from 'react';
import { useParams } from 'react-router-dom';

import Page from '~recipe/ui/Page';
import RecipeOverview from '~recipe/recipe/containers/RecipeOverview';

import useRecipeQuery from '../hooks/useRecipeQuery';

export interface Props {}

const RecipeDetailRoute = (props: Props): React.ReactElement => {
  const params = useParams();
  const recipeId = params.id || '';
  const { data: recipe, error } = useRecipeQuery({ id: recipeId });

  return (
    <Page title="Recipe Detail">
      {error || (recipe && <RecipeOverview recipe={recipe} />)}
    </Page>
  );
};

export default RecipeDetailRoute;
