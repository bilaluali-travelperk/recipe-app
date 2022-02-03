import * as React from 'react';

import RouterRoutes, {
  Props as WrappedProps,
} from '../components/RouterRoutes';
import routes from '../routes';

export type Props = Omit<WrappedProps, 'routes'>;

const RouterPropsContainer = (props: Props): React.ReactElement => (
  <RouterRoutes {...props} routes={[]}/>
);

export default RouterPropsContainer;
