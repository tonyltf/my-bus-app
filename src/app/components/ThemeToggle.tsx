'use client'

import { useTheme } from "next-themes";
import { Sun, Moon } from 'lucide-react';
import { THEMES } from '../theme/themes';
import { ChangeEvent, useState } from "react";

const ThemeToggle = () => {
  const { theme = '', systemTheme = '', setTheme } = useTheme();
  const { darkTheme, lightTheme} = THEMES;
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [muiTheme, setMuiTheme] = useState(useDarkTheme ? darkTheme : lightTheme);
  const changeThemeHandler = () => {
    setTheme((theme || systemTheme) === darkTheme ? lightTheme : darkTheme);
    setUseDarkTheme(muiTheme === lightTheme);
    setMuiTheme(muiTheme === lightTheme ? darkTheme : lightTheme);
  };
  return (
    <>
      <button onClick={() => { changeThemeHandler(); }}>
        {(theme || systemTheme) === 'dark' ? <Sun color='white'/> : <Moon color='black'/>}
      </button>
    </>
  );
}

export default ThemeToggle;