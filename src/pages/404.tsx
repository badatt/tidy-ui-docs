import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { FlexBox, FlexItem, IconButton, Text } from '@tidy-ui/all';
import { Icon } from 'ui';
import SEO from 'components/SEO';

const NotFoundPage: React.FC = () => {
  const { notFound } = useStaticQuery(graphql`
    {
      notFound: file(relativePath: { eq: "404.svg" }) {
        publicURL
      }
    }
  `);
  return (
    <>
      <SEO title="/404 Not found" />
      <FlexBox>
        <FlexItem span={6}>
          <FlexBox ctr fld="column" gap="2rem">
            <FlexItem>
              <FlexBox fld="column" gap="1rem">
                <Text.h1>Oops !</Text.h1>
                <Text.h6>It seems we've hit a hiccup - the page you're after isn't in the usual spot.</Text.h6>
                <Text.body1>
                  We apologize for any inconvenience this may cause. While our technical team diligently investigates,
                  please consider perusing other sections of our website.
                </Text.body1>
              </FlexBox>
            </FlexItem>
            <FlexItem>
              <FlexBox ctr ali="center">
                <Link to="/">
                  <IconButton tone="minor" variant="primary" icon={<Icon icon="fa-solid fa-arrow-left-long" />}>
                    Go to home
                  </IconButton>
                </Link>
              </FlexBox>
            </FlexItem>
          </FlexBox>
        </FlexItem>
        <FlexItem span={18}>
          <img src={notFound.publicURL} />
        </FlexItem>
      </FlexBox>
    </>
  );
};

export default NotFoundPage;
