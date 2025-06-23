import * as React from 'react';
import { LiveContext, LiveProvider } from 'react-live';
import { themes } from 'prism-react-renderer';
import { color, hsla, FlexBox, Paper, Text, FlexItem, Badge } from '@tidy-ui/all';

import { useTheme } from 'hooks';

import ReactLiveScope from './scope';
import * as Styled from './styles';

interface Props {
  code: string;
  disabled?: boolean;
  language?: string;
  noPreview?: boolean;
  ErrorWrapper?: React.FC<React.PropsWithChildren>;
  SuccessWrapper?: React.FC<React.PropsWithChildren>;
  PreviewWrapper?: React.FC<React.PropsWithChildren>;
  CodeWrapper?: React.FC<React.PropsWithChildren>;
}

interface PreviewProps {
  ErrorWrapper?: React.FC<React.PropsWithChildren>;
  SuccessWrapper?: React.FC<React.PropsWithChildren>;
}

const VsCode: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Paper ele={<FlexBox fld="column" gap="0.5rem" />} padding="0.5rem">
      <FlexBox gap="1rem" padding="0.25rem 0.5rem" jsc="space-between" ali="center">
        <FlexItem ele={<FlexBox gap="0.25rem" />}>
          <Styled.VsCodeWindowBtn style={{ background: hsla(color.red[500]) }} />
          <Styled.VsCodeWindowBtn style={{ background: hsla(color.amber[500]) }} />
          <Styled.VsCodeWindowBtn style={{ background: hsla(color.green[500]) }} />
        </FlexItem>
        <FlexItem>
          <Badge isDotted isBlink tone="success">
            <Text.Caption bld disabled>
              Live
            </Text.Caption>
          </Badge>
        </FlexItem>
      </FlexBox>
      {children}
    </Paper>
  );
};

const LiveCode: React.FC = () => {
  const { code, language, disabled, onChange } = React.useContext(LiveContext);
  const { theme } = useTheme();
  return disabled ? (
    <Styled.Code>
      <Styled.Editor
        code={code}
        language={language}
        disabled={disabled}
        onChange={onChange}
        theme={theme.isDark ? themes.vsDark : themes.vsLight}
      />
    </Styled.Code>
  ) : (
    <VsCode>
      <Styled.Code>
        <Styled.Editor
          code={code}
          language={language}
          disabled={disabled}
          onChange={onChange}
          theme={theme.isDark ? themes.vsDark : themes.vsLight}
        />
      </Styled.Code>
    </VsCode>
  );
};

const LiveError: React.FC = () => {
  return <Styled.Err />;
};

const LiveSuccess: React.FC = () => {
  return <Styled.Preview />;
};

const LivePreview: React.FC<PreviewProps> = (props) => {
  const { error } = React.useContext(LiveContext);
  if (error) {
    return props.ErrorWrapper ? (
      <props.ErrorWrapper>
        <LiveError />
      </props.ErrorWrapper>
    ) : (
      <LiveError />
    );
  }

  if (!error) {
    return props.SuccessWrapper ? (
      <props.SuccessWrapper>
        <LiveSuccess />
      </props.SuccessWrapper>
    ) : (
      <LiveSuccess />
    );
  }
};

const LiveEditor: React.FC<Props> = (props) => {
  return (
    <LiveProvider scope={ReactLiveScope} {...props}>
      {!props.noPreview &&
        (props.PreviewWrapper ? (
          <props.PreviewWrapper>
            <LivePreview ErrorWrapper={props.ErrorWrapper} SuccessWrapper={props.SuccessWrapper} />
          </props.PreviewWrapper>
        ) : (
          <LivePreview ErrorWrapper={props.ErrorWrapper} SuccessWrapper={props.SuccessWrapper} />
        ))}
      {props.CodeWrapper ? (
        <props.CodeWrapper>
          <LiveCode />
        </props.CodeWrapper>
      ) : (
        <LiveCode />
      )}
    </LiveProvider>
  );
};

export { LiveEditor, LiveCode, LiveError, LiveSuccess };
