import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Badge } from '@tidy-ui/all';

const HomeLogo: React.FC = () => {
  const { homeLogo } = useStaticQuery(graphql`
    {
      homeLogo: file(relativePath: { eq: "home-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 120, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  const image = getImage(homeLogo);

  return (
    <Link to="/">
      <Badge content="beta" isOutlined>
        <GatsbyImage image={image!} alt="Home" />
      </Badge>
    </Link>
  );
};

export default HomeLogo;
