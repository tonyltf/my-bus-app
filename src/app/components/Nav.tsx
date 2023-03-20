'use client'

import { useState } from 'react';
// import { getServerSession } from 'next-auth';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import InputBase from '@mui/material/InputBase';
import { MenuIcon, MoreHorizontalIcon } from 'lucide-react';

import ThemeToggle from './ThemeToggle';
import Menu from './Menu';
import Search from './ui/Search';
import MoreMenu from './ui/MoreMenu';

const Nav = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <AppBar
        className={`fixed backdrop-blur-sm bg-white dark:bg-slate-900/100 h-12 z-10 px-4 py-1 w-full border-b border-slate-500 text-slate-900 dark:text-slate-50 ${ open ? 'ml-0' : ''}`}
        position="static"
      >
      {/* <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/100 h-10 z-10 px-2 w-full border-b border-slate-900'> */}
          <div className='container max-w-7xl mx-auto w-full h-full flex justify-between items-center gap-2'>
            <MenuIcon className='cursor-pointer' onClick={() => {setOpen(true)}}/>
            {/* < Link href='/' className=''>
              Transit app
            </Link> */}
            <Search />
            <ThemeToggle />
            <MoreMenu
              items={[{
                text: 'Settings'
              }]}
            />
          </div>
      {/* </div> */}
      </AppBar>
      <Menu open={open} setOpen={setOpen} />
    </>
  )
}

export default Nav;