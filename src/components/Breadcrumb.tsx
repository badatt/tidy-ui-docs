import * as React from 'react';
import { Breadcrumb as TBreadCrumb, BreadcrumbItem } from '@tidy-ui/navigation';

interface Props {
  links: {
    name: string;
    path: string;
  }[];
}

const Breadcrumb: React.FC<Props> = ({ links }) => {
  return (
    <TBreadCrumb tone="info">
      <BreadcrumbItem href="/getting-started">Home</BreadcrumbItem>
      {links.map((l) => (
        <BreadcrumbItem key={l.name} href={l.path} style={{ textTransform: 'capitalize' }}>
          {l.name}
        </BreadcrumbItem>
      ))}
    </TBreadCrumb>
  );
};

export default Breadcrumb;
