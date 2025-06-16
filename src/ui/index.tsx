import * as React from 'react';
import type { Props } from '@mdx-js/react/lib';
import { Anchor, Chip, Divider, Note, Text } from '@tidy-ui/all';
import { DocApi, DocLib } from '../components';
import { H1, H2, H3, H4, H5, H6 } from './headings';
import Image from './Image';
import { Li, Ol, Ul } from './list';
import Pre from './Pre';
import { Prop } from './text';

export { default as Icon } from './Icon';
export * from './text';

export const mdxComponents = {
  Chip: (props: Props) => <Chip {...props} tone="minor" girth="sm" margin="0 0 0.5rem 0" />,
  DocApi,
  DocLib,
  Note,
  Prop,
  Text,
  a: (props: Props) => <Anchor {...props} tone="major" display="inline-block" />,
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
  p: (props: Props) => <Text.P {...props} style={{ lineHeight: 1.8, marginBottom: '1rem' }} />,
  pre: Pre,
  ul: Ul,
};
