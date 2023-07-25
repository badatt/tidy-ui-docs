import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import * as Styled from './styles';

const Logo: React.FC = () => {
  const { site, placeholderImage } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "passport-photo.png" }) {
        childImageSharp {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const logoTitle: string = site.siteMetadata.title;
  const logoImage: IGatsbyImageData = placeholderImage.childImageSharp.fluid;

  return (
    <Styled.Logo to="/">
      <Styled.Image>
        <GatsbyImage image={logoImage} alt={logoTitle} />
      </Styled.Image>
      <Styled.Text>{logoTitle}</Styled.Text>
    </Styled.Logo>
  );
};

export default Logo;
