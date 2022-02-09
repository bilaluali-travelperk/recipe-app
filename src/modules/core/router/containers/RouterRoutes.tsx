import * as React from 'react';

import RouterRoutes, {
  Props as WrappedProps,
} from '../components/RouterRoutes';
import useRoutes from '../hooks/useRoutes';

export type Props = Omit<WrappedProps, 'routes'>;

const RouterPropsContainer = (props: Props): React.ReactElement => (
  <RouterRoutes {...props} routes={useRoutes()}/>
);

export default RouterPropsContainer;
