import * as React from 'react';
import type { Props } from '@mdx-js/react/lib';
import { Divider } from '@tidy-ui/layout';
import { Anchor, Text } from '@tidy-ui/presentation';
import { H1, H2, H3, H4, H5, H6 } from './headings';
import Image from './Image';
import { Li, Ol, Ul } from './list';
import Pre from './Pre';

export { default as Icon } from './Icon';
export {};

export const mdxComponents = {
  Text,
  a: (props: Props) => (
    <Anchor {...props} tone="info" rel="nofollow noopener noreferrer" target="_blank" display="inline-block" />
  ),
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  hr: () => <Divider margin="1rem 0" />,
  img: Image,
  li: Li,
  ol: Ol,
  p: (props: Props) => <Text.p {...props} style={{ marginBottom: '1rem' }} />,
  pre: Pre,
  ul: Ul,
};
