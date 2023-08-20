import React, { useState } from 'react';
import { setSessionPassword } from '@mkitio/gatsby-theme-password-protect/src/utils/utils';
import { Button, FlexBox, Input, Note, styled, Text } from '@tidy-ui/all';
import { App, SEO } from 'components';

const Password = styled(Input)`
  :nth-child(2) {
    height: 2.5em;
    width: 2.5em;
  }
`;

const PasswordProtect = () => {
  const [password, setPassword] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    setSessionPassword(password);
    window.location.reload(); // eslint-disable-line
  };

  return (
    <App>
      <SEO title="/Login" />
      <FlexBox ctr height="calc(100vh - 80px)" fld="column" gap="5rem" ali="center">
        <Text.h2 ctr bld>
          Hey there!
        </Text.h2>
        <Note>
          Tidy UI is currently in its beta phase, and at the moment, access is limited to collaborators only. But don't
          worry, once we release the first standalone version, we'll remove this authentication requirement. Stay tuned
          for the official launch!
        </Note>
        <form onSubmit={onSubmit}>
          <FlexBox margin="auto" width="80%" gap="1rem">
            <Password
              type="password"
              placeholder="Enter password"
              girth="xxl"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button variant="hero" girth="xxl" tone="major">
              Submit
            </Button>
          </FlexBox>
        </form>
      </FlexBox>
    </App>
  );
};

export default PasswordProtect;
