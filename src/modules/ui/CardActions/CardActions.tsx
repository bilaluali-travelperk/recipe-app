import * as React from 'react';

import { CardActions } from './CardActions.styles';
import { CardActionsProps as Props } from './types';

const CardActionsContainer = ({
  children,
  ...props
}: Props): React.ReactElement => {
  return <CardActions {...props}>{children}</CardActions>;
};

CardActionsContainer.defaultProps = {};

export default CardActionsContainer;
