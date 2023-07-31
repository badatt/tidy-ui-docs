import * as React from 'react';
import { Breadcrumb as TBreadCrumb, BreadcrumbItem } from '@tidy-ui/navigation';
import { IBreadcrumbItem } from './types';

interface Props {
  breadcrumb: IBreadcrumbItem[];
}

const Breadcrumb: React.FC<Props> = ({ breadcrumb }) => {
  return (
    <TBreadCrumb tone="info">
      <BreadcrumbItem href="/getting-started">Home</BreadcrumbItem>
      {breadcrumb.map((b) => (
        <BreadcrumbItem key={b.name} href={b.path} style={{ textTransform: 'capitalize' }}>
          {b.name}
        </BreadcrumbItem>
      ))}
    </TBreadCrumb>
  );
};

export default Breadcrumb;
