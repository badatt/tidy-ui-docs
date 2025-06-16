import React from 'react';
import { useTheme, orchidDark, orchidLight } from '@tidy-ui/all';

export default function () {
  const { changeTheme, theme } = useTheme();

  React.useEffect(() => {
    changeTheme(localStorage.getItem('theme-is-dark') == 'true' ? orchidDark : orchidLight);
  }, [changeTheme]);

  React.useEffect(() => {
    localStorage.setItem('theme-is-dark', `${theme.isDark}`);
  }, [theme]);

  return {
    theme,
    changeTheme,
  };
}
