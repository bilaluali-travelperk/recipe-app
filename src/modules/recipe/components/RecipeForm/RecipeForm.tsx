import * as React from 'react';

import {
  RecipeForm,
  RecipeFormField,
  RecipeFormMultipleField,
} from './RecipeForm.styles';
import { RecipeFormProps as Props } from './types';

const RecipeFormComponent = (props: Props): React.ReactElement => {
  const formFields = useRecipeFormFields();

  return (
    <RecipeForm {...props}>
      <RecipeFormField {...formFields.name} />
      <RecipeFormMultipleField {...formFields.description} />
      <RecipeFormMultipleField {...formFields.ingredients} />
    </RecipeForm>
  );
};

RecipeFormComponent.defaultProps = {};

export default RecipeFormComponent;

const useRecipeFormFields = () =>
  React.useMemo(
    () => ({
      name: {
        InputProps: {
          id: 'name',
          type: 'text',
          name: 'name',
        },
        LabelProps: {
          htmlFor: 'name',
          children: 'Name',
        },
        HelperProps: {
          children: 'E.g. Pizza Napoli',
        },
      },
      description: {
        TextAreaProps: {
          id: 'description',
          type: 'text',
          name: 'description',
        },
        LabelProps: {
          htmlFor: 'description',
          children: 'Description',
        },
        HelperProps: {
          children: 'Recipe description',
        },
      },
      ingredients: {
        TextAreaProps: {
          id: 'ingredients',
          type: 'text',
          name: 'ingredients',
        },
        LabelProps: {
          htmlFor: 'ingredients',
          children: 'Ingredients',
        },
        HelperProps: {
          children: 'Recipe ingredients separated by space',
        },
      },
    }),
    [],
  );
