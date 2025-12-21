import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { label: 'Partnereink', path: '#partnereink' },
    { label: 'Referenciáink', path: '#referenciaink' },
    { label: 'Kapcsolat', path: '#contact' },
    { label: 'Ajánlói program', path: '#ajanloi-program' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: '#2B2B28' }}>
      <Box sx={{ px: { xs: 3, md: 8, lg: 12, xl: 15 } }}>
        <Toolbar disableGutters sx={{ py: 1.5, px: 0, maxWidth: '1440px', mx: 'auto' }}>
          {/* Logo and WISEBOX text - Left side */}
          <Box
            component="a"
            href="/"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            sx={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              flexGrow: 0,
              cursor: 'pointer',
            }}
          >
            <img
              src="/images/wisebox-logo.webp"
              alt="Wisebox"
              style={{ height: '60px', width: 'auto' }}
            />
            <Box
              sx={{
                color: 'white',
                fontWeight: 700,
                fontSize: '18px',
                letterSpacing: '0.5px',
              }}
            >
              WISEBOX
            </Box>
          </Box>

          {/* Spacer to push menu to the right */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop menu - Right side */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
            {menuItems.map((item) => (
              <Button
                key={item.path}
                href={item.path}
                sx={{
                  color: 'white',
                  fontWeight: 400,
                  fontSize: '15px',
                  textTransform: 'none',
                  padding: '6px 12px',
                  minWidth: 'auto',
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'transparent',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              color="primary"
              href="#contact"
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                fontWeight: 700,
                fontSize: '14px',
                textTransform: 'uppercase',
                px: 3,
                py: 1.25,
                borderRadius: '4px',
                boxShadow: 'none',
                '&:hover': {
                  bgcolor: 'primary.dark',
                  boxShadow: 'none',
                },
              }}
            >
              IDŐPONTOT KÉREK
            </Button>
          </Box>

          {/* Mobile menu toggle */}
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: 'none' },
              ml: 'auto',
              color: 'white',
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Box>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: 240 },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.path}
              component="a"
              href={item.path}
              onClick={handleDrawerToggle}
              sx={{
                textDecoration: 'none',
                color: 'text.primary',
                '&:hover': {
                  bgcolor: 'background.paper',
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};
