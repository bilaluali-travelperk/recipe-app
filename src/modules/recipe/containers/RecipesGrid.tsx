import * as React from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';

import { Recipe } from '~recipe/models';

import RecipesGrid, { RecipesGridProps } from '../components/RecipesGrid';
import RecipeActions, { RecipeAction } from '../components/RecipeActions';

type WrappedProps = Omit<RecipesGridProps, 'items'>;

export interface Props extends WrappedProps {
  recipes: Array<Recipe>;
}

const RecipesGridContainer = ({
  recipes,
  ...props
}: Props): React.ReactElement => {
  const navigate = useNavigate();

  const items = React.useMemo(
    () =>
      recipes.map(({ id, name, description }: Recipe) => ({
        id,
        header: name,
        primary: description,
        actions: <RecipeActions actions={getActions(navigate, id)} />,
        divider: true,
      })),
    [recipes, navigate, getActions],
  );

  return <RecipesGrid items={items} />;
};

export default RecipesGridContainer;

const getActions = (
  navigate: NavigateFunction,
  id: string,
): Array<RecipeAction> => [
  {
    key: `detail-${id}`,
    onClick: () => {
      navigate(`${id}`);
    },
    variant: 'secondary',
    children: 'Detail',
  },
];
