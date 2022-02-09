import * as React from 'react';

import { RecipeActions, RecipeAction } from './RecipeActions.styles';
import { RecipeActionsProps as Props } from './types';

const RecipeActionComponent = ({
  actions,
  ...props
}: Props): React.ReactElement => (
  <RecipeActions>
    {actions.map((action) => (
      <RecipeAction {...action} />
    ))}{' '}
  </RecipeActions>
);

RecipeActionComponent.defaultProps = {};

export default RecipeActionComponent;
