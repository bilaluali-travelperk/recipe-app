import { BASE_URL } from '~recipe/core/api';
import { Recipe } from '~recipe/models';
import useQuery from '~recipe/core/api/hooks/useQuery';

export interface Props {
  id: string;
}

const getRecipePath = (id: string) => `${BASE_URL}/recipes/${id}`;

export default function useRecipeQuery({ id, ...props }: Props) {
  return useQuery<Recipe>({ url: getRecipePath(id), ...props });
}
