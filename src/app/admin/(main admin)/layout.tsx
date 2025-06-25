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
import { ExpandLess, ExpandMore, Home } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MenuIcon from '@mui/icons-material/Menu';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import { usePathname, useRouter } from 'next/navigation';
import { Collapse } from '@mui/material';
import { LogoutOutlined } from '@mui/icons-material';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const pathname                        = usePathname();
  const router                          = useRouter();
  const [open, setOpen]                 = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('');
  const [openCollapse, setOpenCollapse] = React.useState(false);

  const isSelected = (target: string) => pathname === target;



  const goToRoute = (route: string, id: string) => {
    router.push(route);
    setSelectedItem(id);
    setOpen(false);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {/* Página Principal */}
        <ListItem disablePadding>
          <ListItemButton selected={isSelected('/admin')} onClick={() => goToRoute('/admin', '/admin')}>
            <ListItemIcon><Home /></ListItemIcon>
            <ListItemText primary="Página Principal" />
          </ListItemButton>
        </ListItem>

        {/* Configurações com submenu */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => setOpenCollapse(!openCollapse)}>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Configurações" />
            {openCollapse ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openCollapse} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} selected={isSelected('/admin/configurations/social-midia')} onClick={() => goToRoute('/admin/configurations/social-midia', 'social-midia')}>
              <ListItemText primary="Redes Sociais" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} selected={isSelected('/admin/configurations/financial')} onClick={() => goToRoute('/admin/configurations/financial', 'financial')}>
              <ListItemText primary="Financeiro" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} selected={isSelected('/admin/configurations/email')} onClick={() => goToRoute('/admin/configurations/email', 'email')}>
              <ListItemText primary="Email"/>
            </ListItemButton>
          </List>
        </Collapse>

        <Divider />

        {/* Usuários */}
        <ListItem disablePadding>
          <ListItemButton selected={isSelected('/admin/users')} onClick={() => goToRoute('/admin/users', 'users')}>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary="Usuários" />
          </ListItemButton>
        </ListItem>

        {/* Notícias */}
        <ListItem disablePadding>
          <ListItemButton selected={isSelected('/admin/news')} onClick={() => goToRoute('/admin/news', 'news')}>
            <ListItemIcon><NewspaperIcon /></ListItemIcon>
            <ListItemText primary="Notícias" />
          </ListItemButton>
        </ListItem>

        {/* Emails */}
        <ListItem disablePadding>
          <ListItemButton selected={isSelected('/admin/emails')} onClick={() => goToRoute('/admin/emails', 'emails2')}>
            <ListItemIcon><MarkEmailUnreadIcon /></ListItemIcon>
            <ListItemText primary="Emails" />
          </ListItemButton>
        </ListItem>
        <Divider/>
        <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <LogoutOutlined />
          </ListItemIcon>
          <ListItemText primary="Sair" />
        </ListItemButton>
      </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Drawer open={open} onClose={()=>setOpen(false)}>
        {DrawerList}
      </Drawer>
      <header className="flex items-center justify-start bg-gray-50 h-[12dvh] pl-10">
        <div className="bg-gray-200 rounded-sm hover:bg-gray-100 hover:scale-110 transition-all duration-150 ease-in-out">
          <Button onClick={()=>setOpen(true)}>
            <MenuIcon fontSize="large" />
          </Button>
        </div>
      </header>
      <main className='w-full min-h-[88dvh]'>{children}</main>
    </>
  );
}
