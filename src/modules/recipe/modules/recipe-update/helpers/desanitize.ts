import { Recipe } from '~recipe/models';

type Data = {
  name: string;
  description: string;
  ingredients: string;
};

const desanitize = (recipe: Recipe): Data => ({
  name: recipe.name,
  description: recipe.description,
  ingredients: recipe.ingredients.map(({ name }) => name).join(' '),
});

export default desanitize;
