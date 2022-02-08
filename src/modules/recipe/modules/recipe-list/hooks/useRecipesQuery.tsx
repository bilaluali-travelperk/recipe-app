import { BASE_URL } from '~recipe/core/api';
import { Recipe } from '~recipe/models';
import useQuery from '~recipe/core/api/hooks/useQuery';

const API_PATH = `${BASE_URL}/recipes`;

export default function useRecipesQuery() {
  return useQuery<Array<Recipe>>({ url: API_PATH });
}
