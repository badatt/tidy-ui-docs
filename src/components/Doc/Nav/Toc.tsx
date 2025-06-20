import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Text } from '@tidy-ui/all';

import { IMdxFields } from 'types';
import { useScrollSpy } from 'hooks';

import * as Styled from './styles';

export interface ITocItem {
  activeItem?: string;
  items?: ITocItem[];
  title?: string;
  url?: string;
}

interface INode {
  fields: IMdxFields;
  tableOfContents: {
    items: ITocItem[];
  };
}

interface ITocNodes {
  toc: {
    nodes: INode[];
  };
}

const ContentItems: React.FC<ITocItem> = ({ items, title, url, activeItem }) => {
  return (
    <Styled.TocGroup>
      {url && (
        <Link to={url}>
          {activeItem === url.replace('#', '') ? (
            <Styled.TocActiveItem>{title}</Styled.TocActiveItem>
          ) : (
            <Styled.TocItem>{title}</Styled.TocItem>
          )}
        </Link>
      )}
      {items?.map((i) => <ContentItems key={i.title} {...i} activeItem={activeItem} />)}
    </Styled.TocGroup>
  );
};

interface Props {
  slug?: string;
}

const Toc: React.FC<Props> = ({ slug }) => {
  const {
    toc: { nodes },
  }: ITocNodes = useStaticQuery(graphql`
    {
      toc: allMdx {
        nodes {
          tableOfContents
          fields {
            slug
          }
        }
      }
    }
  `);
  const tableOfContents = nodes.find((n) => n.fields.slug === slug)?.tableOfContents;
  const headings: string[] = [];

  const toc2Headings = (items?: ITocItem[]) => {
    items?.forEach((i) => {
      headings.push(i.url?.replace('#', '') ?? '');
      if (i.items && i.items.length > 0) {
        toc2Headings(i.items);
      }
    });
  };

  toc2Headings(tableOfContents?.items);

  const activeItem = useScrollSpy(headings?.map((h) => `[id="${h}"]`));

  return (
    <Styled.Nav>
      <Text.Caption uc bld padding="1rem 0 0 0">
        Index
      </Text.Caption>
      <ContentItems items={tableOfContents?.items} activeItem={activeItem} />
    </Styled.Nav>
  );
};

export default Toc;
