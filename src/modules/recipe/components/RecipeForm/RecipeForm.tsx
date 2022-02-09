import * as React from 'react';

import {
  RecipeForm,
  RecipeFormField,
  RecipeFormMultipleField,
} from './RecipeForm.styles';
import { RecipeFormProps as Props } from './types';

const RecipeFormComponent = ({
  fields,
  ...props
}: Props): React.ReactElement => (
  <RecipeForm {...props}>
    <RecipeFormField {...fields.name} />
    <RecipeFormMultipleField {...fields.description} />
    <RecipeFormMultipleField {...fields.ingredients} />
  </RecipeForm>
);

RecipeFormComponent.defaultProps = {};

export default RecipeFormComponent;
