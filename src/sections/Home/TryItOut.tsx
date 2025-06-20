import * as React from 'react';
import { Alert, Border, FlexBox, FlexItem } from '@tidy-ui/all';

import { Code } from 'ui';

interface ITryItOutProps {
  $code: string;
}

const LiveErrorWrapper = () => {
  return (
    <Alert isFilled status="danger" margin="0 0 1rem 0">
      <Code.LiveError />
    </Alert>
  );
};

const LiveCodeWrapper = () => {
  return (
    <FlexItem flx="1">
      <Code.LiveCode />
    </FlexItem>
  );
};

const LivePreviewWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <FlexItem flx="1">{children}</FlexItem>;
};

const TryItOut: React.FC<ITryItOutProps> = (props) => {
  return (
    <Border variant="dashed">
      <FlexBox gap="1rem" fld="row-reverse" ali="stretch">
        <Code.LiveEditor
          code={props.$code}
          ErrorWrapper={LiveErrorWrapper}
          CodeWrapper={LiveCodeWrapper}
          PreviewWrapper={LivePreviewWrapper}
        />
      </FlexBox>
    </Border>
  );
};

export { TryItOut };
