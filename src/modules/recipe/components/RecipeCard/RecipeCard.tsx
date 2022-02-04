import * as React from 'react';

import Card from '~recipe/ui/Card';
import CardHeader from '~recipe/ui/CardHeader';
import CardBody from '~recipe/ui/CardBody';
import Typography from '~recipe/ui/Typography';

import { RecipesCard } from './RecipeCard.styles';
import { RecipeCardProps as Props } from './types';

const RecipeCardComponent = ({ header, body }: Props): React.ReactElement => (
  <RecipesCard>
    <CardHeader>
      <Typography size="h2">{header}</Typography>
    </CardHeader>
    <CardBody>
      <Typography size="text" variant="secondary">
        {body}
      </Typography>
    </CardBody>
  </RecipesCard>
);

RecipeCardComponent.defaultProps = {};

export default RecipeCardComponent;
