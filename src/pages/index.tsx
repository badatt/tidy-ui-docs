import React from 'react';
import { DividerEnhanced, FlexBox, FlexItem, Text } from '@tidy-ui/all';

import { Page, Footer } from 'components';
import { Features, Hero, TryItOut, HeroBg } from 'sections';

const code = `<Card>
  <CardHeader isDivided>
    <FlexBox gap="1rem" ali="center">
      <Avatar src="https://avatars.githubusercontent.com/u/43672979?v=4" />
      <FlexBox fld="column">
        <Text.H6>Balu Praveen Datty</Text.H6>
        <Text.Body1 color={hsla(color.slate[500])}>@badatt</Text.Body1>
      </FlexBox>
    </FlexBox>
  </CardHeader>
  <CardBody>
    <FlexBox fld="column" gap="1rem">
      <Text.Body1>
        I'm a passionate developer and the creator of Tidy UI, a component library built with care and
        attention to detail. I'd love for you to give it a try and share your feedback! If you come across any
        bugs, please don't hesitate to
        <Anchor
          girth="sm"
          href="https://github.com/badatt/tidy-ui/issues"
          target="_blank"
          rel="noopener noreferrer"
          tone="minor"
        >
        open an issue
        </Anchor>
        , I truly appreciate it. Curious to learn more about my work or chat about the project? Feel free to
        reach out. Id be happy to connect!
      </Text.Body1>
      <img
        src="https://picsum.photos/800/400"
        alt="Tidy UI"
      />
    </FlexBox>
  </CardBody>
  <CardFooter isDivided>
    <Stack>
      <Anchor tone="major" href="https://github.com/badatt" target="_blank" rel="noopener noreferrer" canLaunch>
        GitHub
      </Anchor>
      <Anchor tone="major" href="https://www.linkedin.com/in/balu-praveen-datty/" target="_blank" rel="noopener noreferrer" canLaunch>
        LinkedIn
      </Anchor>
    </Stack>
  </CardFooter>
</Card>
`;

const IndexPage: React.FC = () => {
  return (
    <Page title="/Home">
      <HeroBg />
      <FlexBox as="section" fld="column" padding="4rem 0" gap="4rem">
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
