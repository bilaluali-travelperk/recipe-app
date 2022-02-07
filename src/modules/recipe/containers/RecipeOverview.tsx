import * as React from 'react';

import { Recipe } from '~recipe/models';

import RecipeCard from '../components/RecipeCard';
import RecipeIngredientList from '../components/RecipeIngredientList';

export interface Props {
  recipe: Recipe;
}

const RecipeOverview = ({ recipe, ...props }: Props): React.ReactElement => {
  const { name, description, ingredients } = recipe;

  const items = React.useMemo(
    () => ingredients.map(({ id, name }) => ({ key: id, content: name })),
    [ingredients],
  );

  return (
    <RecipeCard
      header={name}
      primary={description}
      secondary={<RecipeIngredientList title="Ingredients" items={items} />}
      {...props}
    />
  );
};

export default RecipeOverview;
