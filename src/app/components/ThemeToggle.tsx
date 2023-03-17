'use client'

import { useTheme } from "next-themes";
import { Sun, Moon } from 'lucide-react';


const ThemeToggle = () => {
  const { theme = '', systemTheme = '', setTheme } = useTheme();
  return (
    <>
      <button onClick={() => setTheme((theme || systemTheme) === 'dark' ? 'light' : 'dark')}>
        {(theme || systemTheme) === 'dark' ? <Sun color='white'/> : <Moon color='black'/>}
      </button>
    </>
  );
}

export default ThemeToggle;