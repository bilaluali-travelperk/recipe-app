import * as React from 'react';

import Typography from '~recipe/ui/Typography';

import {
  RecipeIngredientList,
  RecipeIngredientListContainer,
  RecipeIngredientListItem,
} from './RecipeIngredientList.styles';
import { RecipeIngredientListProps as Props } from './types';

const RecipeIngredientListComponent = ({
  title,
  items,
  ...props
}: Props): React.ReactElement => (
  <RecipeIngredientListContainer>
    <Typography size="h4">{title}</Typography>
    <RecipeIngredientList {...props}>
      {items.map(({ key, content, ...item }) => (
        <RecipeIngredientListItem key={key} {...item}>
          {content}
        </RecipeIngredientListItem>
      ))}
    </RecipeIngredientList>
  </RecipeIngredientListContainer>
);

RecipeIngredientListComponent.defaultProps = {};

export default RecipeIngredientListComponent;
