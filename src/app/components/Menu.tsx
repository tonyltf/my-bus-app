'use client'

import { Dispatch, SetStateAction, useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ArrowLeft, Bus } from 'lucide-react';

const Menu = ({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <SwipeableDrawer
      className='dark:bg-slate-900'
      sx={{
        width: 500,
      }}
      variant='persistent'
      open={open}
      onOpen={(event) => {}}
      onClose={(event) => {}}
    >
      <div className='h-10 container flex items-center'>
        <ArrowLeft onClick={() => setOpen(false)} />
      </div>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Bus />
            </ListItemIcon>
            <ListItemText primary='Transit' />
          </ListItemButton>
        </ListItem>
      </List>
    </SwipeableDrawer>
  )
}

export default Menu;