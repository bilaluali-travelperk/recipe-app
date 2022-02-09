import * as React from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';

import { Recipe } from '~recipe/models';
import { BASE_URL } from '~recipe/core';

import sanitize from '../modules/recipe-create/helpers/sanitize';
import { RecipeQuery } from '../modules/recipe-create/helpers/sanitize';
import RecipeForm from '../components/RecipeForm';

export interface Props {}

type OnChange = (
  event:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>,
) => void;

const RecipeFormContainer = (props: Props): React.ReactElement => {
  const navigate = useNavigate();
  const initialFormData = useInitialFormData();
  const [formData, setFormData] = React.useState(initialFormData);

  const handleSubmit = React.useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const recipe = sanitize(formData);
      await submit(recipe);
      navigate('/recipes');
    },
    [formData],
  );

  const handleChange = React.useCallback<OnChange>((event) => {
    setFormData((previousFormData) => ({
      ...previousFormData,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const fields = useRecipeFormFields({ onChange: handleChange });

  return (
    <RecipeForm
      onSubmit={handleSubmit}
      // @ts-ignore: OnChange event type not detected on textarea.
      fields={fields}
      SubmitProps={{ variant: 'success' }}
    />
  );
};

export default RecipeFormContainer;

const useInitialFormData = () =>
  React.useMemo(
    () => ({
      name: '',
      description: '',
      ingredients: '',
    }),
    [],
  );

const useRecipeFormFields = ({ onChange }: { onChange: OnChange }) =>
  React.useMemo(
    () => ({
      name: {
        InputProps: {
          id: 'name',
          type: 'text',
          name: 'name',
          required: true,
          onChange,
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
          required: true,
          onChange,
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
          required: true,
          onChange,
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

async function submit(recipe: RecipeQuery) {
  const resp = await fetch(`${BASE_URL}/recipes/`, {
    method: 'POST',
    body: JSON.stringify(recipe),
    headers: { 'Content-Type': 'application/json' },
  });

  if (resp.status !== 201) {
    throw new Error(`[${resp.status}]: Recipe not created`);
  }
  const createdRecipe: Recipe = await resp.json();

  return createdRecipe;
}
