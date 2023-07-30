import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FlexBox } from '@tidy-ui/layout';
import { Text } from '@tidy-ui/presentation';
import * as Styled from './styles';

const Footer: React.FC = () => {
  const { indiaFlag, reactIcon, scIcon, gatsbyIcon } = useStaticQuery(graphql`
    {
      indiaFlag: file(relativePath: { eq: "india-flag-icon.svg" }) {
        publicURL
      }
      reactIcon: file(relativePath: { eq: "react-icon.png" }) {
        publicURL
      }
      scIcon: file(relativePath: { eq: "styled-components-logo.png" }) {
        publicURL
      }
      gatsbyIcon: file(relativePath: { eq: "gatsby-icon.png" }) {
        publicURL
      }
    }
  `);
  return (
    <FlexBox as="footer" fld="column" ali="center" padding="2rem" margin="5rem 0 0 0" gap="1rem">
      <FlexBox gap="0.5rem" ali="center" fld="column">
        <FlexBox gap="0.5rem" ali="center">
          Made in <Styled.ToolsIcon src={indiaFlag.publicURL} />
        </FlexBox>
        <Text.caption>with love for dev community</Text.caption>
      </FlexBox>
      <FlexBox gap="1rem">
        <a href="https://react.dev/" target="_blank">
          <Styled.ToolsIcon src={reactIcon.publicURL} />
        </a>
        <a href="https://styled-components.com/" target="_blank">
          <Styled.ToolsIcon src={scIcon.publicURL} />
        </a>
        <a href="https://www.gatsbyjs.com/" target="_blank">
          <Styled.ToolsIcon src={gatsbyIcon.publicURL} />
        </a>
      </FlexBox>
    </FlexBox>
  );
};

export default Footer;
