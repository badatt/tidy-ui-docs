import * as React from 'react';
import type { PageProps } from 'gatsby';
import { IBreadcrumbItem, Page } from 'components';

const breadcrumb: IBreadcrumbItem[] = [
  {
    name: 'Components',
    path: '/components',
  },
];

const Components: React.FC<PageProps> = (props: PageProps) => {
  return (
    <Page path={props.path} breadcrumb={breadcrumb}>
      <div>All Components</div>
    </Page>
  );
};

export default Components;
