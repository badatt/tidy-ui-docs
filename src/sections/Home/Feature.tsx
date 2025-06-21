import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { styled, css, Text } from '@tidy-ui/all';
import { keyframes } from 'styled-components';

import { Li, Ul } from 'ui';

interface IFeature {
  id: string;
  content?: string[];
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FeatureContent = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  transition: all 0.5s ease;
  cursor: pointer;
  display: flex;
  flex-direction: row;

  &:hover {
    transform: scale(1.02);
  }
`;

const LeftSection = styled.div<{ isActive: boolean }>`
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  flex-direction: column;
  overflow: hidden;
  ${(props) =>
    props.isActive
      ? css`
          display: none;
          transform: translateX(100%);
        `
      : css`
          display: flex;
          transform: translateX(0);
        `}
`;

const RightSection = styled.div<{ isActive: boolean }>`
  width: fit-content;
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  flex-direction: column;
  overflow: hidden;

  ${(props) =>
    props.isActive
      ? css`
          display: flex;
          transform: translateX(0);
        `
      : css`
          display: none;
          transform: translateX(100%);
        `}
`;

const ImageContainer = styled.div`
  transition: all 0.7s ease-in-out;
  flex: 1;
  display: flex;
`;

const ImageWrapper = styled.div`
  height: fit-content;
  width: fit-content;
  overflow: hidden;
  transition: transform 0.5s ease;
  display: flex;

  ${FeatureContent}:hover & {
    transform: scale(1.1);
  }
`;

const PanelContent = styled.div`
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

const AnimatedDiv = styled.div`
  animation: ${fadeIn} 0.5s ease-out forwards;
`;

const Feature: React.FC<IFeature> = (props) => {
  const {
    featureModularDesignImage,
    featureCustomizableImage,
    featureDeveloperCentricImage,
    featureLayoutsImage,
    featureProductionReadyImage,
    featureSupportImage,
  } = useStaticQuery(graphql`
    {
      featureModularDesignImage: file(relativePath: { eq: "features-modular.png" }) {
        childImageSharp {
          gatsbyImageData(width: 2240, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      featureCustomizableImage: file(relativePath: { eq: "features-customizable.png" }) {
        childImageSharp {
          gatsbyImageData(width: 2240, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      featureDeveloperCentricImage: file(relativePath: { eq: "features-developer-centric.png" }) {
        childImageSharp {
          gatsbyImageData(width: 2240, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      featureLayoutsImage: file(relativePath: { eq: "features-layouts.png" }) {
        childImageSharp {
          gatsbyImageData(width: 2240, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      featureProductionReadyImage: file(relativePath: { eq: "feature-production-ready.png" }) {
        childImageSharp {
          gatsbyImageData(width: 2240, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      featureSupportImage: file(relativePath: { eq: "features-support.png" }) {
        childImageSharp {
          gatsbyImageData(width: 2240, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  const renderImage = () => {
    switch (props.id) {
      case 'features-modular':
        return <GatsbyImage image={getImage(featureModularDesignImage)!} alt="features-modular.png" />;
      case 'features-customizable':
        return <GatsbyImage image={getImage(featureCustomizableImage)!} alt="features-customizable.png" />;
      case 'features-developer-centric':
        return <GatsbyImage image={getImage(featureDeveloperCentricImage)!} alt="features-developer-centric.png" />;
      case 'features-layouts':
        return <GatsbyImage image={getImage(featureLayoutsImage)!} alt="features-layouts.png" />;
      case 'features-production-ready':
        return <GatsbyImage image={getImage(featureProductionReadyImage)!} alt="feature-production-ready.png" />;
      case 'features-support':
        return <GatsbyImage image={getImage(featureSupportImage)!} alt="features-support.png" />;
    }
  };

  const [isActive, setIsActive] = React.useState(false);

  const handleCardClick = () => {
    setIsActive(!isActive);
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsActive(false);
  };

  return (
    <FeatureContent>
      <LeftSection isActive={isActive}>
        <ImageContainer onMouseEnter={handleCardClick}>
          <ImageWrapper>{renderImage()}</ImageWrapper>
        </ImageContainer>
      </LeftSection>

      <RightSection isActive={isActive} onMouseLeave={handleCloseClick}>
        <PanelContent>
          <AnimatedDiv>
            <Ul>
              {props.content?.map((c) => (
                <Li key={c}>
                  <Text.H6>{c}</Text.H6>
                </Li>
              ))}
            </Ul>
          </AnimatedDiv>
        </PanelContent>
      </RightSection>
    </FeatureContent>
  );
};

export default Feature;
