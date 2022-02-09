import * as React from 'react';

import { Button } from './Button.styles';
import { ButtonProps as Props } from './types';

const ButtonComponent = ({
  type = 'button',
  children,
  ...props
}: Props): React.ReactElement => {
  return <Button {...props}>{children}</Button>;
};

ButtonComponent.defaultProps = {};

export default ButtonComponent;
