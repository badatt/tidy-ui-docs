import * as React from 'react';
import { Link } from 'gatsby';
import { Text } from '@tidy-ui/presentation';
import * as Styled from './styles';

export interface ITocItem {
  items?: Array<ITocItem>;
  title?: string;
  url?: string;
}

interface Props {
  items?: Array<ITocItem>;
}

const ContentItems: React.FC<ITocItem> = ({ items, title, url }) => {
  return (
    <Styled.TocGroup>
      {url && (
        <Styled.TocItem>
          <Link to={url}>{title}</Link>
        </Styled.TocItem>
      )}
      {items?.map((i) => <ContentItems key={i.title} {...i} />)}
    </Styled.TocGroup>
  );
};

const Toc: React.FC<Props> = ({ items }) => {
  return (
    <Styled.Nav>
      <Text.caption uc bld>
        Index
      </Text.caption>
      <ContentItems items={items} />
    </Styled.Nav>
  );
};

export default Toc;
