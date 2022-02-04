import * as React from 'react';

import { CardBody } from './CardBody.styles';
import { CardBodyProps as Props } from './types';

const CardBodyContainer = ({
  children,
  ...props
}: Props): React.ReactElement => {
  return <CardBody {...props}>{children}</CardBody>;
};

CardBodyContainer.defaultProps = {};

export default CardBodyContainer;
