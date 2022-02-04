import * as React from 'react';

import { Button } from './Button.styles';
import { ButtonProps as Props } from './types';

const ButtonContainer = ({
  children,
  ...props
}: Props): React.ReactElement => {
  return (
    <Button {...props}>
      {children}
    </Button>
  );
};

ButtonContainer.defaultProps = {
  variant: 'primary',
};

export default ButtonContainer;
