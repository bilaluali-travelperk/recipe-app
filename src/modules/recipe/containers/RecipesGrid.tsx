import * as React from 'react';

import { Recipe } from '~recipe/models';

import RecipesGrid, { RecipesGridProps } from '../components/RecipesGrid';

type WrappedProps = Omit<RecipesGridProps, 'items'>;

export interface Props extends WrappedProps {
  recipes: Array<Recipe>;
}

const RecipesGridContainer = ({
  recipes,
  ...props
}: Props): React.ReactElement => {
  const items = React.useMemo(
    () =>
      recipes.map(({ id, name, description }: Recipe) => ({
        id,
        header: name,
        body: description,
      })),
    [recipes],
  );

  return <RecipesGrid items={items} />;
};

export default RecipesGridContainer;
