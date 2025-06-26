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
import Cookies from 'js-cookie'; // Biblioteca para gerenciar cookies
import { api } from '@/services/api';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <AuthProvider>
      <LayoutContent>{children}</LayoutContent>
    </AuthProvider>
  );
}


export function LayoutContent({ children }: Readonly<{ children: React.ReactNode; }>) {
  const pathname                        = usePathname();
  const router                          = useRouter();
  const [open, setOpen]                 = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('');
  const [openCollapse, setOpenCollapse] = React.useState(false);
  const [isLoading,setIsLoading] = React.useState(true);
  const authContext = useAuth()


  const isSelected = (target: string) => pathname === target;

  React.useEffect(() => {
    const verifyToken = async () => {
      const authorization = authContext.getAuthorization(); // Obtém token do cookie
      if (!authorization) {
        router.push('/admin/login');
        return;
      }
        // Exemplo: Valida token com uma API
        authContext.isLoged()
          .then((response)=>{
            if (response.status != 200) {
              Cookies.remove('token');
              router.push('/admin/login');
            }
          })
          .catch((error)=>{
            console.error('Erro ao verificar token:', error);
            router.push('/admin/login');
          })
          .finally(()=>{
            setIsLoading(false);
          })}
 

    verifyToken();
  }, [router]);


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
          <ListItemButton selected={isSelected('/admin/notice')} onClick={() => goToRoute('/admin/notice', 'notice')}>
            <ListItemIcon><NewspaperIcon /></ListItemIcon>
            <ListItemText primary="Notícias" />
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

  if(isLoading) return (<div>Carregando...</div>)

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
      <main className='w-full min-h-[88dvh]'>
        <AuthProvider>
          {children}
        </AuthProvider>
      </main>
    </>
  );
}
