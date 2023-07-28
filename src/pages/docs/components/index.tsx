import React from 'react';
import Component from 'templates/Component';
import SEO from 'components/SEO';

const IndexPage: React.FC = () => {
  return (
    <>
      <SEO title="Components" />
      <Component>hello</Component>
    </>
  );
};

export default IndexPage;
