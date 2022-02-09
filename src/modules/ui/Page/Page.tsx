import * as React from 'react';

import Typography from '~recipe/ui/Typography';
import Navbar from '~recipe/ui/Navbar';

import { Page, PageGrid, PageItem, PageTitle } from './Page.styles';
import { PageProps as Props } from './types';

const PageComponent = ({
  children,
  title,
  titleProps,
  ...props
}: Props): React.ReactElement => (
  <Page {...props}>
    <Navbar variant="primary" />
    <PageGrid>
      <PageTitle>
        <Typography size="h4" {...titleProps}>
          {title}
        </Typography>
      </PageTitle>
      <PageItem>{children}</PageItem>
    </PageGrid>
  </Page>
);

PageComponent.defaultProps = {};

export default PageComponent;
