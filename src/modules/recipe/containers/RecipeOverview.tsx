import * as React from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';

import { Recipe } from '~recipe/models';

import RecipeCard from '../components/RecipeCard';
import RecipeIngredientList from '../components/RecipeIngredientList';
import RecipeActions, { RecipeAction } from '../components/RecipeActions';

export interface Props {
  recipe: Recipe;
}

const RecipeOverview = ({ recipe, ...props }: Props): React.ReactElement => {
  const { id, name, description, ingredients } = recipe;
  const navigate = useNavigate();

  const items = React.useMemo(
    () => ingredients.map(({ id, name }) => ({ key: id, content: name })),
    [ingredients],
  );

  return (
    <RecipeCard
      header={name}
      primary={description}
      secondary={<RecipeIngredientList title="Ingredients" items={items} />}
      actions={<RecipeActions actions={getActions(navigate, id)} />}
      divider
      {...props}
    />
  );
};

export default RecipeOverview;

const getActions = (
  navigate: NavigateFunction,
  id: string,
): Array<RecipeAction> => [
  {
    key: `edit-${id}`,
    onClick: () => {
      navigate(`/recipes/update/${id}`);
    },
    variant: 'success',
    children: 'Edit',
  },
];
