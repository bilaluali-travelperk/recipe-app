import { Variant } from '../Theme';

export interface TypographyProps {
  variant: Variant;
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'text' | 'small';
  children?: React.ReactNode;
}
