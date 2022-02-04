import * as React from 'react';

import RecipeCard from '../RecipeCard';
import { RecipesGrid, RecipesItem } from './RecipesGrid.styles';
import { RecipesGridProps as Props } from './types';

const RecipesGridComponent = ({
  items,
  ...props
}: Props): React.ReactElement => (
  <RecipesGrid {...props}>
    {items.map(({ id, ...item }) => (
      <RecipesItem key={id}>
        <RecipeCard {...item} />
      </RecipesItem>
    ))}
  </RecipesGrid>
);

RecipesGridComponent.defaultProps = {};

export default RecipesGridComponent;
