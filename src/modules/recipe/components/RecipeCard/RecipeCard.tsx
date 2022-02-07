import * as React from 'react';

import CardHeader from '~recipe/ui/CardHeader';
import CardBody from '~recipe/ui/CardBody';
import CardActions from '~recipe/ui/CardActions';
import Typography from '~recipe/ui/Typography';

import { RecipesCard, RecipesCardDivider } from './RecipeCard.styles';
import { RecipeCardProps as Props } from './types';

const RecipeCardComponent = ({
  header,
  primary,
  secondary,
  actions,
  divider,
}: Props): React.ReactElement => (
  <RecipesCard>
    <CardHeader>
      <Typography size="h2">{header}</Typography>
    </CardHeader>
    <CardBody>
      <Typography size="text" variant="secondary">
        {primary}
      </Typography>
      {secondary}
    </CardBody>
    {divider && <RecipesCardDivider />}
    <CardActions>{actions}</CardActions>
  </RecipesCard>
);

RecipeCardComponent.defaultProps = {
  divider: false,
};

export default RecipeCardComponent;
