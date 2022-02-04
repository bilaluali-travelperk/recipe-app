import * as React from 'react';

import Card from '~recipe/ui/Card';
import CardHeader from '~recipe/ui/CardHeader';
import CardBody from '~recipe/ui/CardBody';
import Typography from '~recipe/ui/Typography';

import { RecipeCardProps as Props } from './types';

const RecipeCard = ({ header, body }: Props): React.ReactElement => (
  <Card>
    <CardHeader>
      <Typography size="h2">{header}</Typography>
    </CardHeader>
    <CardBody>
      <Typography size="text" variant="secondary">
        {body}
      </Typography>
    </CardBody>
  </Card>
);

RecipeCard.defaultProps = {};

export default RecipeCard;
