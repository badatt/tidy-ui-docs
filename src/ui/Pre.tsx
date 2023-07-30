import * as React from 'react';
import type { Props } from '@mdx-js/react/lib';
import { Code, Ide } from './Code';

interface RestProps {
  className?: string;
}

const Pre = (preProps: Props) => {
  const ele = preProps.children as React.ReactElement<React.PropsWithChildren>;
  const { children, ...rest } = ele.props;
  const props = rest as RestProps;
  const code = (children as string).trim();
  return <>{props.className === 'language-jsx' ? <Ide code={code} /> : <Code code={code} disabled />}</>;
};

export default Pre;
