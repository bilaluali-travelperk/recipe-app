import * as React from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';

import { Recipe } from '~recipe/models';
import { BASE_URL } from '~recipe/core';

import sanitize, { Data } from '../modules/recipe-create/helpers/sanitize';
import desanitize from '../modules/recipe-update/helpers/desanitize';
import { RecipeQuery } from '../modules/recipe-create/helpers/sanitize';
import RecipeForm from '../components/RecipeForm';

export interface Props {
  recipe?: Recipe;
}

type OnChange = (
  event:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>,
) => void;

const RecipeFormContainer = ({
  recipe,
  ...props
}: Props): React.ReactElement => {
  const navigate = useNavigate();
  const initialFormData = useInitialFormData(recipe);
  const recipeId = recipe?.id;
  const [formData, setFormData] = React.useState<Data>(initialFormData);

  React.useEffect(() => {
    setFormData(initialFormData);
  }, [initialFormData]);

  const handleSubmit = React.useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const recipe = sanitize(formData);

      if (recipeId) {
        await update(recipeId, recipe);
        navigate(`/recipes/${recipeId}`);
      } else {
        await create(recipe);
        navigate('/recipes');
      }
    },
    [recipeId, formData],
  );

  const handleChange = React.useCallback<OnChange>((event) => {
    setFormData((previousFormData) => ({
      ...previousFormData,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const fields = useRecipeFormFields({
    onChange: handleChange,
    values: formData,
  });

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

const useInitialFormData = (recipe?: Recipe) =>
  React.useMemo(
    () => ({
      name: '',
      description: '',
      ingredients: '',
      ...(recipe ? desanitize(recipe) : {}),
    }),
    [recipe],
  );

const useRecipeFormFields = ({
  onChange,
  values,
}: {
  onChange: OnChange;
  values: Data;
}) =>
  React.useMemo(
    () => ({
      name: {
        InputProps: {
          id: 'name',
          type: 'text',
          name: 'name',
          value: values['name'],
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
          value: values['description'],
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
          value: values['ingredients'],
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
    [onChange, values],
  );

async function create(recipe: RecipeQuery) {
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

async function update(id: string, recipe: RecipeQuery) {
  const resp = await fetch(`${BASE_URL}/recipes/${id}/`, {
    method: 'PUT',
    body: JSON.stringify(recipe),
    headers: { 'Content-Type': 'application/json' },
  });

  if (resp.status !== 200) {
    throw new Error(`[${resp.status}]: Recipe not created`);
  }
  const updatedRecipe: Recipe = await resp.json();

  return updatedRecipe;
}
