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
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: '#FFFFFF',
        borderBottom: '1px solid',
        borderColor: 'grey.100',
        transition: 'box-shadow 0.3s ease',
        '&.MuiAppBar-root': {
          boxShadow: '0px 2px 8px rgba(0,0,0,0.06)',
        },
      }}
    >
      <Box sx={{ px: { xs: 3, md: 6, lg: 8 } }}>
        <Toolbar disableGutters sx={{ py: 2, px: 0, maxWidth: '1200px', mx: 'auto' }}>
          {/* Logo and WISEBOX text - Left side */}
          <Box
            component="a"
            href="/"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              window.location.href = '/';
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
              style={{ height: '50px', width: 'auto' }}
            />
            <Box
              sx={{
                color: 'text.primary',
                fontWeight: 700,
                fontSize: '20px',
                letterSpacing: '0.5px',
              }}
            >
              WISEBOX
            </Box>
          </Box>

          {/* Spacer to push menu to the right */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop menu - Right side */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            {menuItems.map((item) => (
              <Button
                key={item.path}
                href={item.path}
                sx={{
                  color: 'text.primary',
                  fontWeight: 500,
                  fontSize: '15px',
                  textTransform: 'none',
                  padding: '8px 16px',
                  minWidth: 'auto',
                  borderRadius: '6px',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'rgba(10,123,127,0.04)',
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
                ml: 2,
                fontWeight: 600,
                fontSize: '15px',
                textTransform: 'uppercase',
                px: 3,
                py: 1,
                borderRadius: '8px',
                boxShadow: 'none',
                '&:hover': {
                  boxShadow: '0 4px 12px rgba(255,107,107,0.3)',
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
              color: 'text.primary',
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
          '& .MuiDrawer-paper': {
            width: 280,
            bgcolor: '#FFFFFF',
            pt: 3,
          },
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
                borderRadius: '8px',
                mx: 2,
                mb: 1,
                '&:hover': {
                  bgcolor: 'rgba(10,123,127,0.04)',
                  color: 'primary.main',
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 500,
                  fontSize: '16px',
                }}
              />
            </ListItem>
          ))}
          <ListItem sx={{ mx: 2, mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              href="#contact"
              fullWidth
              onClick={handleDrawerToggle}
              sx={{
                fontWeight: 600,
                textTransform: 'uppercase',
                py: 1.5,
              }}
            >
              IDŐPONTOT KÉREK
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};
