import * as React from 'react';
import { DividerEnhanced, FlexBox, FlexItem, Text } from '@tidy-ui/all';
import Breadcrumb from './Breadcrumb';
import DocInfo from './DocInfo';
import Footer from './Footer';
import HealthBadge from './HealthBadge';
import { MainNav, Toc } from './Nav';
import SEO from './SEO';

interface Props extends React.PropsWithChildren {
  path: string;
  slug: string;
}

const Page: React.FC<Props> = ({ children, path, slug }) => {
  return (
    <>
      <SEO title={path} />
      <FlexBox>
        <FlexItem span={4}>
          <MainNav slug={slug} />
        </FlexItem>
        <FlexItem span={16} padding="0 1rem">
          <FlexBox jsc="space-between">
            <Breadcrumb slug={slug} />
            <DocInfo slug={slug} />
          </FlexBox>
          {children}
          <DividerEnhanced>
            <Text.caption disabled>End of content</Text.caption>
          </DividerEnhanced>
          <HealthBadge />
          <Footer />
        </FlexItem>
        <FlexItem span={4}>
          <Toc slug={slug} />
        </FlexItem>
      </FlexBox>
    </>
  );
};

export default Page;
