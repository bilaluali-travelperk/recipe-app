import * as React from 'react';

import { Card } from './Card.styles';
import { CardProps as Props } from './types';

const CardContainer = ({ children, ...props }: Props): React.ReactElement => {
  return <Card {...props}>{children}</Card>;
};

CardContainer.defaultProps = {};

export default CardContainer;
