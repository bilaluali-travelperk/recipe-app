import * as React from 'react';
import { useParams } from 'react-router-dom';

import Page from '~recipe/ui/Page';
import RecipeForm from '~recipe/recipe/containers/RecipeForm';
import useRecipeQuery from '~recipe/recipe/modules/recipe-detail/hooks/useRecipeQuery';

export interface Props {}

const RecipeUpdateRoute = (props: Props): React.ReactElement => {
  const params = useParams();
  const recipeId = params.id || '';
  const { data: recipe, error } = useRecipeQuery({ id: recipeId });

  return (
    <Page title="Update Recipe">{error || <RecipeForm recipe={recipe} />}</Page>
  );
};

export default RecipeUpdateRoute;
