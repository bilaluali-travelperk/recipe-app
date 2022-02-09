import { FormProps } from '~recipe/ui/Form';
import { FormFieldProps } from '~recipe/ui/FormField';
import { FormMultipleFieldProps } from '~recipe/ui/FormMultipleField';

export interface RecipeFormFields {
  name: FormFieldProps;
  description: FormMultipleFieldProps;
  ingredients: FormMultipleFieldProps;
}

export interface RecipeFormProps extends FormProps {
  fields: RecipeFormFields;
}
