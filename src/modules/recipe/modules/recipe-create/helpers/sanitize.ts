type Data = {
  name: string;
  description: string;
  ingredients: string;
};

export interface IngredientQuery {
  name: string;
}

export interface RecipeQuery {
  name: string;
  description: string;
  ingredients: Array<IngredientQuery>;
}

const sanitize = (data: Data): RecipeQuery => ({
  ...data,
  ingredients: data.ingredients.split(' ').map((e) => ({ name: e })),
});

export default sanitize;
