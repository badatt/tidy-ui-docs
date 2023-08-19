import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Breadcrumb as TBreadCrumb, BreadcrumbItem } from '@tidy-ui/all';
import { IMdxFields } from './types';

interface IBreadcrumbNode {
  fields: IMdxFields;
}

interface IBreadcrumbNodes {
  breadcrumbs: {
    nodes: IBreadcrumbNode[];
  };
}

interface Props {
  slug: string;
}

const Breadcrumb: React.FC<Props> = ({ slug }) => {
  const {
    breadcrumbs: { nodes },
  }: IBreadcrumbNodes = useStaticQuery(graphql`
    {
      breadcrumbs: allMdx {
        nodes {
          fields {
            slug
            breadcrumb {
              name
              path
            }
          }
        }
      }
    }
  `);
  const breadcrumb = nodes.find((n) => n.fields.slug === slug)?.fields.breadcrumb;
  return (
    <TBreadCrumb tone="info">
      <BreadcrumbItem href="/getting-started">Home</BreadcrumbItem>
      {breadcrumb?.map((b) => (
        <BreadcrumbItem key={b.name} href={b.path} style={{ textTransform: 'capitalize' }}>
          {b.name}
        </BreadcrumbItem>
      ))}
    </TBreadCrumb>
  );
};

export default Breadcrumb;
