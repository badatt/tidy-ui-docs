import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

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
      <GatsbyImage image={image!} alt="Home" />
    </Link>
  );
};

export default HomeLogo;
