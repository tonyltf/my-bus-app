'use client'

import { Dispatch, SetStateAction } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ArrowLeft, Bus, Star } from 'lucide-react';

const Menu = ({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <SwipeableDrawer
      className='dark:bg-slate-900'
      slotProps={{ root: (state) => ({ className: 'dark:bg-slate-900'}) }}
      PaperProps={{
        classes: {
          root: 'dark:bg-slate-900 dark:text-slate-50',
        }
      }}
      open={open}
      onOpen={(event) => { setOpen(true); }}
      onClose={(event) => { setOpen(false); }}
    >
      <div className='h-10 container flex items-center px-4'>
        <ArrowLeft onClick={() => setOpen(false)} />
      </div>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Bus className='dark:text-slate-50'/>
            </ListItemIcon>
            <ListItemText primary='Transit' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Star className='dark:text-slate-50'/>
            </ListItemIcon>
            <ListItemText primary='Favourite' />
          </ListItemButton>
        </ListItem>
      </List>
    </SwipeableDrawer>
  )
}

export default Menu;