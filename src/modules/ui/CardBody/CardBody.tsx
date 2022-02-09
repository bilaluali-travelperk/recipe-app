import * as React from 'react';

import { CardBody } from './CardBody.styles';
import { CardBodyProps as Props } from './types';

const CardBodyComponent = ({
  children,
  ...props
}: Props): React.ReactElement => {
  return <CardBody {...props}>{children}</CardBody>;
};

CardBodyComponent.defaultProps = {};

export default CardBodyComponent;
