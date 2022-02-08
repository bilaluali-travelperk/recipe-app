import * as React from 'react';

import { H1, H2, H3, H4, H5, H6, Text, Small } from './Typography.styles';
import { TypographyProps as Props } from './types';

const Typography = ({
  size = 'text',
  children,
  ...props
}: Props): React.ReactElement => {
  const Component = React.useMemo(
    () =>
      ({
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
        h6: H6,
        text: Text,
        small: Small,
      }[size]),
    [size],
  );

  return <Component {...props}>{children}</Component>;
};

Typography.defaultProps = {
  size: 'text',
  variant: 'text',
};

export default Typography;
