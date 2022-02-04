import * as React from 'react';

import { CardHeader } from './CardHeader.styles';
import { CardHeaderProps as Props } from './types';

const CardHeaderComponent = ({
  children,
  ...props
}: Props): React.ReactElement => {
  return <CardHeader {...props}>{children}</CardHeader>;
};

CardHeaderComponent.defaultProps = {};

export default CardHeaderComponent;
