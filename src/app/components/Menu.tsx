'use client'

import { Dispatch, SetStateAction, useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ArrowLeft, Bus, Star, Settings, LogInIcon } from 'lucide-react';
import { Box, Fade, Modal } from '@mui/material';
import Login from './Login';
import LoginModal from './Login/Modal';

const Menu = ({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) => {
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  // handle menu button onclick


  return (
    <>
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
        <div className='h-12 container flex items-center px-4'>
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
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings className='dark:text-slate-50'/>
              </ListItemIcon>
              <ListItemText primary='Setting' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => { setOpenLoginModal(true); }}>
              <ListItemIcon>
                <LogInIcon className='dark:text-slate-50'/>
              </ListItemIcon>
              <ListItemText primary='Login' />
            </ListItemButton>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <LoginModal openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal} />
    </>
  )
}

export default Menu;