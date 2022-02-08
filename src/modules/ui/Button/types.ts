import { Variant } from '../Theme';

export interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  type?: HTMLButtonElement['type'];
  variant: Variant;
}
