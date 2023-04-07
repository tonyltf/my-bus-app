'use client'

import { Dispatch, MouseEventHandler, ReactElement, SetStateAction, useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ArrowLeft, Bus, Settings as SettingsIcon, LucideLogIn } from 'lucide-react';
import Settings from './Settings';
import Login from './Login';
import ModalWrapper from './Modal';

const Menu = ({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) => {
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [openSettingModal, setOpenSettingModal] = useState<boolean>(false);

  // extract drawer items into an array
const drawerItems: { icon: ReactElement; text: string; handler: MouseEventHandler<HTMLDivElement> }[] = [
    {
      icon: <Bus className='dark:text-slate-50' />,
      text: 'Transit',
      handler: () => {},
    },
    {
      icon: <SettingsIcon className='dark:text-slate-50'/>,
      text: 'Settings',
      handler: () => {
        setOpenSettingModal(true);
      },
    },
    {
      icon: <LucideLogIn className='dark:text-slate-50'/>,
      text: 'Login',
      handler: () => {
        setOpenLoginModal(true);
      },
    }
  ];

  // render List items from drawerItems
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
        onOpen={() => { setOpen(true); }}
        onClose={() => { setOpen(false); }}
      >
        <div className='h-12 container flex items-center px-4'>
          <ArrowLeft onClick={() => setOpen(false)} />
        </div>
        <Divider />
        <List>
          {drawerItems.map(({ text, icon, handler }) => (
            <ListItem disablePadding key={text}>
              <ListItemButton onClick={(e) => { 
                // call the handler and close the menu
                handler && handler(e);
                setOpen(false);
              }}>
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <ModalWrapper open={openLoginModal} setOpen={setOpenLoginModal}>
        <Login />
      </ModalWrapper>
      <ModalWrapper open={openSettingModal} setOpen={setOpenSettingModal}>
        <Settings />
      </ModalWrapper>
    </>
  );
}

export default Menu;
