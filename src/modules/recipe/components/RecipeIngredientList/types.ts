import * as React from "react";

export interface RecipeIngredientListItem {
  key: string;
  content: React.ReactNode;
}

export interface RecipeIngredientListProps {
  title: string;
  items: Array<RecipeIngredientListItem>;
}
