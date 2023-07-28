import React from 'react';

interface Props {
  className: string;
  content: any;
}

const FormatHtml: React.FC<Props> = ({ className, content }) => (
  <span
    className={`${className} format-html`}
    dangerouslySetInnerHTML={{
      __html: content,
    }}
  />
);

export default FormatHtml;
