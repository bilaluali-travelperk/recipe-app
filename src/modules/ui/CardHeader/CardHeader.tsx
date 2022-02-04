import * as React from 'react';

import { CardHeader } from './CardHeader.styles';
import { CardHeaderProps as Props } from './types';

const CardHeaderContainer = ({
  children,
  ...props
}: Props): React.ReactElement => {
  return <CardHeader {...props}>{children}</CardHeader>;
};

CardHeaderContainer.defaultProps = {};

export default CardHeaderContainer;
