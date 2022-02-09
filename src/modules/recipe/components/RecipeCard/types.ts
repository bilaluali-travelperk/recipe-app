import * as React from 'react';

export interface RecipeCardProps {
  header: React.ReactNode;
  primary: React.ReactNode;
  secondary?: React.ReactNode;
  actions?: React.ReactNode;
  divider?: boolean;
}
