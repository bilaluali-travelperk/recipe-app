import * as React from 'react';

import { TypographyProps } from '~recipe/ui/Typography';

export interface PageProps {
  title: React.ReactNode;
  titleProps?: TypographyProps;
  children?: React.ReactNode;
}
