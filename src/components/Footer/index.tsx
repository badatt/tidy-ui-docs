import { Anchor, FlexBox, FlexItem, Stack, Text } from '@tidy-ui/all';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReact } from '@fortawesome/free-brands-svg-icons';
import { graphql, useStaticQuery } from 'gatsby';

import { ISite } from 'types';

const Footer: React.FC = () => {
  const {
    site: {
      siteMetadata: { author },
    },
  }: { site: ISite } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          source {
            githubLink
          }
          author {
            email
            github
            githubUsername
            linkedin
            name
            url
          }
        }
      }
    }
  `);

  return (
    <FlexBox fld="column" nowrap>
      <FlexItem>
        <FlexBox padding="0 2rem" jsc="space-around">
          <FlexItem ele={<Stack order="column" gap="0.25rem" />}>
            <Text.Caption>
              Built with <FontAwesomeIcon icon={faReact} />
            </Text.Caption>
            <Text.Caption>
              Deployed on <FontAwesomeIcon icon={faGithub} />
            </Text.Caption>
            <Text.Caption>
              Developed by
              <Anchor girth="xs" href={author?.github} target="_blank" tone="info">
                {author?.githubUsername}
              </Anchor>
            </Text.Caption>
          </FlexItem>
          <FlexItem ele={<Stack order="column" />}>
            <Text.Caption bld tone="minor">
              Quick links
            </Text.Caption>
            <Text.Caption>Home</Text.Caption>
            <Text.Caption>About</Text.Caption>
            <Text.Caption>Contact</Text.Caption>
            <Text.Caption>Privacy Policy</Text.Caption>
            <Text.Caption>Terms of Service</Text.Caption>
          </FlexItem>
          <FlexItem ele={<Stack order="column" />}>
            <Text.Caption bld tone="minor">
              Connect
            </Text.Caption>
            <Text.Caption>
              <Anchor girth="xs" href={`mailto:${author?.email}`} canLaunch>
                Email
              </Anchor>
            </Text.Caption>
            <Text.Caption>
              <Anchor girth="xs" href={`mailto:${author?.github}`} canLaunch>
                Github
              </Anchor>
            </Text.Caption>
            <Text.Caption>
              <Anchor girth="xs" href={`mailto:${author?.linkedin}`} canLaunch>
                Linkedin
              </Anchor>
            </Text.Caption>
          </FlexItem>
        </FlexBox>
      </FlexItem>
      <FlexItem als="center" margin="2rem 0">
        <Text.Caption>© {new Date().getFullYear()} tidy-ui.com</Text.Caption>
      </FlexItem>
    </FlexBox>
  );
};

export default Footer;
