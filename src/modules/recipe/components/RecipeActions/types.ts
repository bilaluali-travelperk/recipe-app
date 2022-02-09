import * as React from 'react';

import { ButtonProps } from '~recipe/ui/Button';

export type RecipeAction = ButtonProps;

export interface RecipeActionsProps {
  actions: Array<RecipeAction>;
}
