import * as React from 'react';
import type { PageProps } from 'gatsby';
import { FlexBox, FlexItem } from '@tidy-ui/layout';
import { Footer, MainNav } from 'components';

const Components: React.FC<PageProps> = (props: PageProps) => {
  return (
    <FlexBox>
      <FlexItem span={4}>
        <MainNav path={props.path} />
      </FlexItem>
      <FlexItem span={20} padding="0 1rem">
        <div>All components</div>
        <Footer />
      </FlexItem>
    </FlexBox>
  );
};

export default Components;
