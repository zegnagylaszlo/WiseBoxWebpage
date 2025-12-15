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
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { label: 'Szolgáltatások', path: '/szolgaltatasok' },
    { label: 'Partnerek', path: '/partnerek' },
    { label: 'Referenciák', path: '/referenciak' },
    { label: 'Üzletfejlesztők', path: '/uzletfejlesztok' },
    { label: 'Ajánlói program', path: '/ajanloi-program' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ bgcolor: 'white' }}>
      <Container>
        <Toolbar disableGutters>
          <Box
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src="/images/wisebox-logo.webp"
              alt="Wisebox"
              style={{ height: '50px', width: 'auto' }}
            />
          </Box>

          {/* Desktop menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
            {menuItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  color: 'text.primary',
                  fontWeight: 600,
                  fontSize: '16px',
                  textTransform: 'none',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              color="primary"
              sx={{
                ml: 1,
                px: 3.5,
                py: 1.5,
                fontWeight: 700,
                textTransform: 'uppercase',
                fontSize: '14px',
                borderRadius: '4px',
              }}
            >
              KONZULTÁCIÓT KÉREK
            </Button>
          </Box>

          {/* Mobile menu toggle */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

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
              component={Link}
              to={item.path}
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
