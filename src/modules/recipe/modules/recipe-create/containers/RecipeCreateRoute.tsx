import * as React from 'react';

import Page from '~recipe/ui/Page';
import RecipeForm from '~recipe/recipe/containers/RecipeForm';

export interface Props {}

const RecipeCreateRoute = (props: Props): React.ReactElement => {
  return (
    <Page title="Create Recipe">
      <RecipeForm />
    </Page>
  );
};

export default RecipeCreateRoute;
