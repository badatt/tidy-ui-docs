import * as React from 'react';
import { DividerEnhanced, FlexBox, FlexItem } from '@tidy-ui/layout';
import { Text } from '@tidy-ui/presentation';
import { Breadcrumb, EditOnGithub, Footer, HealthBadge, IBreadcrumbItem, MainNav } from 'components';

interface Props extends React.PropsWithChildren {
  breadcrumb?: IBreadcrumbItem[];
  path: string;
  source?: string;
}

const Page: React.FC<Props> = ({ breadcrumb, children, path, source }) => {
  return (
    <FlexBox>
      <FlexItem span={4}>
        <MainNav path={path} />
      </FlexItem>
      <FlexItem span={20} padding="0 1rem">
        <FlexBox fld="row" jsc="space-between">
          {breadcrumb ? <Breadcrumb breadcrumb={breadcrumb} /> : <div />}
          {source && <EditOnGithub source={source} />}
        </FlexBox>
        {children}
        <DividerEnhanced>
          <Text.caption disabled>End of content</Text.caption>
        </DividerEnhanced>
        <HealthBadge />
        <Footer />
      </FlexItem>
    </FlexBox>
  );
};

export default Page;
