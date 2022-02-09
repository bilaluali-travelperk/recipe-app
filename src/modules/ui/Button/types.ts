import { Variant } from '../Theme';

export type ButtonHTMLProps = Omit<
  React.HTMLProps<HTMLButtonElement>,
  'ref' | 'as'
>;

export interface ButtonProps extends ButtonHTMLProps {
  variant: Variant;
}
