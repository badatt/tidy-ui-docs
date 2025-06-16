import * as React from 'react';
import { DividerEnhanced, FlexBox, FlexItem, Text } from '@tidy-ui/all';
import Footer from '../Footer';
import { MainNav, Toc } from '../Nav';
import SEO from '../SEO';
import Breadcrumb from './Breadcrumb';
import { DocInfo } from '.';

interface Props extends React.PropsWithChildren {
  path: string;
  slug: string;
}

const MdDoc: React.FC<Props> = ({ children, path, slug }) => {
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
            <Text.Caption disabled>End of content</Text.Caption>
          </DividerEnhanced>
          <Footer />
        </FlexItem>
        <FlexItem span={4}>
          <Toc slug={slug} />
        </FlexItem>
      </FlexBox>
    </>
  );
};

export default MdDoc;
