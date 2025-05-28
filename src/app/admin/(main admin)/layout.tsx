'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MenuIcon from '@mui/icons-material/Menu';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';

export default function RootLayout(
    {children}: Readonly<{children: React.ReactNode;}>
) {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon/>
              </ListItemIcon>
              <ListItemText primary={'Usuários'} />
            </ListItemButton>
          </ListItem>
      </List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon/>
          </ListItemIcon>
          <ListItemText primary={'Configurações'} />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <NewspaperIcon/>
          </ListItemIcon>
          <ListItemText primary={'Noticias'} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <MarkEmailUnreadIcon/>
          </ListItemIcon>
          <ListItemText primary={'Emails'} />
        </ListItemButton>
      </ListItem>
    </Box>
  );

  return (
    <>
      <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
      </Drawer>
      <header className='flex items-center justify-start p-5 bg-gray-50'>
          <div className="bg-gray-100 rounded-sm hover:bg-gray-150 hover:scale-110 transition-all duration-150 ease-in-out" >
            <Button onClick={toggleDrawer(true)}>
              <MenuIcon fontSize="large"/>
            </Button>
          </div>
      </header>
      
      {children}
    </>
    )
}