import * as React from 'react';

import { Card } from './Card.styles';
import { CardProps as Props } from './types';

const CardComponent = ({ children, ...props }: Props): React.ReactElement => {
  return <Card {...props}>{children}</Card>;
};

CardComponent.defaultProps = {};

export default CardComponent;
