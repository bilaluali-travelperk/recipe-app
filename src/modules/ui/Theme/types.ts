import 'styled-components';

export type Variant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'text';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<Variant, string>;
  }
}
