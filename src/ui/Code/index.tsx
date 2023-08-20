import * as React from 'react';
import { LiveContext, LivePreview, LiveProvider } from 'react-live';
import { Alert, Border, Chip } from '@tidy-ui/all';
import ReactLiveScope from './scope';
import * as Styled from './styles';

interface Props {
  code: string;
  disabled?: boolean;
  language?: string;
}

const Ide: React.FC<Props> = (props) => {
  return (
    <LiveProvider scope={ReactLiveScope} {...props}>
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
        positioning="top-center"
      >
        <Editor />
      </Border>
    </LiveProvider>
  );
};

const Editor: React.FC = () => {
  const { code, language, disabled, onChange, error } = React.useContext(LiveContext);
  return (
    <>
      {error ? (
        <Alert isFilled status="danger" margin="0 0 1rem 0">
          <Styled.Err />
        </Alert>
      ) : (
        <LivePreview />
      )}
      <Styled.Code>
        <Styled.Editor code={code} language={language} disabled={disabled} onChange={onChange} />
      </Styled.Code>
    </>
  );
};

const Code: React.FC<Props> = (props) => {
  return (
    <LiveProvider {...props}>
      <Styled.Code>
        <Styled.Editor />
      </Styled.Code>
    </LiveProvider>
  );
};

export { Code, Ide };
