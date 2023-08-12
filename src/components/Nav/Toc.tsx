import * as React from 'react';
import { Link } from 'gatsby';
import { Text } from '@tidy-ui/presentation';
import { useScrollSpy } from 'hooks';
import * as Styled from './styles';

export interface ITocItem {
  activeItem?: string;
  items?: Array<ITocItem>;
  title?: string;
  url?: string;
}

interface Props {
  headings: string[];
  items?: Array<ITocItem>;
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

const Toc: React.FC<Props> = ({ items, headings }) => {
  const activeItem = useScrollSpy(headings?.map((h) => `[id="${h}"]`));

  return (
    <Styled.Nav>
      <Text.caption uc bld padding="1rem 0 0 0">
        Index
      </Text.caption>
      <ContentItems items={items} activeItem={activeItem} />
    </Styled.Nav>
  );
};

export default Toc;
