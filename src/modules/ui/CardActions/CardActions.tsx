import * as React from 'react';

import { CardActions } from './CardActions.styles';
import { CardActionsProps as Props } from './types';

const CardActionsComponent = ({
  children,
  ...props
}: Props): React.ReactElement => {
  return <CardActions {...props}>{children}</CardActions>;
};

CardActionsComponent.defaultProps = {};

export default CardActionsComponent;
