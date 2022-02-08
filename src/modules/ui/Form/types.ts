import * as React from 'react';

import { ButtonProps } from '~recipe/ui/Button';

export type FormHTMLProps = Omit<
  React.HTMLProps<HTMLFormElement>,
  'ref' | 'as'
>;

export interface FormProps extends FormHTMLProps {
  SubmitProps: ButtonProps;
}
