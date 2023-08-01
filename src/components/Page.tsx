import * as React from 'react';
import { DividerEnhanced, FlexBox, FlexItem } from '@tidy-ui/layout';
import { Text } from '@tidy-ui/presentation';
import { Breadcrumb, EditOnGithub, Footer, HealthBadge, IBreadcrumbItem, MainNav } from 'components';

interface Props extends React.PropsWithChildren {
  breadcrumb?: IBreadcrumbItem[];
  path: string;
  source?: string;
  timeToRead?: {
    minutes: number;
    text: string;
    time: number;
    words: number;
  };
}

const Page: React.FC<Props> = ({ breadcrumb, children, path, source, timeToRead }) => {
  return (
    <FlexBox>
      <FlexItem span={4}>
        <MainNav path={path} />
      </FlexItem>
      <FlexItem span={20} padding="0 1rem">
        <FlexBox jsc="space-between">
          <FlexBox>{breadcrumb ? <Breadcrumb breadcrumb={breadcrumb} /> : <div />}</FlexBox>
          <FlexBox ali="center" gap="2rem">
            {timeToRead && <Text.body2>{timeToRead.text}</Text.body2>}
            {source && <EditOnGithub source={source} />}
          </FlexBox>
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