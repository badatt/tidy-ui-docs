import React from 'react';
import { DividerEnhanced, FlexBox, FlexItem, Text } from '@tidy-ui/all';

import { Page, Footer } from 'components';
import { Features, Hero, TryItOut } from 'sections';

const code = `<Alert ele={<FlexBox fld="column" />} status="info">
  <AlertTitle>
    <Text.H6>Your action needed!</Text.H6>
  </AlertTitle>
  🔔 Hey there! Just a heads-up: Your inbox is feeling lonely. Give it some love and check for new messages. Happy
  communicating!
  <AlertFooter>
    <ButtonCluster isStretched>
      <Button variant="simple" tone="danger">
        Next time
      </Button>
      <Button tone="major">Go to inbox</Button>
    </ButtonCluster>
  </AlertFooter>
</Alert>
`;

const IndexPage: React.FC = () => {
  return (
    <Page title="/Home">
      <FlexBox as="section" fld="column" padding="4rem 0" gap="2rem">
        <FlexItem>
          <Hero />
        </FlexItem>
        <FlexItem>
          <TryItOut $code={code} />
        </FlexItem>
        <FlexItem>
          <Features />
        </FlexItem>
        <FlexItem>
          <DividerEnhanced>
            <Text.Caption disabled>Less code. More clarity. Tidy UI.</Text.Caption>
          </DividerEnhanced>
        </FlexItem>
        <FlexItem>
          <Footer />
        </FlexItem>
      </FlexBox>
    </Page>
  );
};

export default IndexPage;
