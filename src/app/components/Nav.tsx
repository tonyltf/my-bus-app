'use client'

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';

import ThemeToggle from './ThemeToggle';
import Menu from './Menu';
import Search from './Search';
import MenuButton from './MenuButton';

const Nav = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <AppBar
        className={`fixed backdrop-blur-sm bg-white dark:bg-slate-900/100 h-12 z-10 px-4 py-1 w-full border-b border-slate-500 text-slate-900 dark:text-slate-50 ${ open ? 'ml-0' : ''}`}
        position="static"
      >
        <div className='container max-w-7xl mx-auto w-full h-full flex justify-between items-center gap-2'>
          <MenuButton openMenu={setOpen} />
          <Search />
          <ThemeToggle />
        </div>
      </AppBar>
      <Menu open={open} setOpen={setOpen} />
    </>
  )
}

export default Nav;