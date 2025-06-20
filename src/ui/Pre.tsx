import * as React from 'react';
import type { Props } from '@mdx-js/react/lib';
import { Alert, Border, Chip, Panel, PanelBody, PanelHeader, Text } from '@tidy-ui/all';

import { LiveEditor, LiveCode, LiveError } from './Code';

interface RestProps {
  className?: string;
}

interface EditorProps {
  code: string;
  disabled?: boolean;
  language?: string;
}

const ErrorWrapper: React.FC = () => {
  return (
    <Alert isFilled status="danger" margin="0 0 1rem 0">
      <LiveError />
    </Alert>
  );
};

const CodePanel: React.FC = () => {
  return (
    <Panel margin="2rem 0 0 0">
      <PanelHeader ele={<Text.Body1 udl ctr />}>Live editor</PanelHeader>
      <PanelBody>
        <LiveCode />
      </PanelBody>
    </Panel>
  );
};

const Ide: React.FC<EditorProps> = (props) => {
  return (
    <Border
      align={16}
      content={
        <Chip girth="xs" tone="info">
          LIVE EXAMPLE
        </Chip>
      }
      margin="4rem 0"
      padding="2rem 1rem 1rem 1rem"
      variant="dashed"
      density="2px"
      positioning="top-right"
    >
      <LiveEditor {...props} CodeWrapper={CodePanel} ErrorWrapper={ErrorWrapper} />
    </Border>
  );
};

const Pre = (preProps: Props) => {
  const ele = preProps.children as React.ReactElement<React.PropsWithChildren>;
  const { children, ...rest } = ele.props;
  const props = rest as RestProps;
  const code = (children as string).trim();
  return (
    <>{props.className === 'language-jsx' ? <Ide code={code} /> : <LiveEditor code={code} disabled noPreview />}</>
  );
};

export default Pre;
