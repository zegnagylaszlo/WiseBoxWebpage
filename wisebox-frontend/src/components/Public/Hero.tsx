import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

export const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '500px', md: '700px' },
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #00c96b 0%, #00964B 50%, #2E8640 100%)',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '60%',
          height: '200%',
          backgroundImage: 'url(/WB_logo/WB\\ LOGO\\ WHITE\\ FIN.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          opacity: 0.12,
          transform: 'rotate(-15deg)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '30%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 100%)',
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <Typography
          variant="overline"
          color="white"
          sx={{
            display: 'block',
            mb: 3,
            fontSize: { xs: '18px', md: '22px' },
            fontWeight: 600,
            letterSpacing: '2px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          A KKV-K KONTROLLING RENDSZERE
        </Typography>
        <Box
          component="img"
          src="/WB_logo/WB LOGO WHITE FIN.png"
          alt="Wisebox Logo"
          sx={{
            width: { xs: '200px', md: '300px' },
            height: 'auto',
            mb: 4,
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
          }}
        />
        <Typography
          variant="h2"
          color="white"
          sx={{
            mb: 5,
            fontWeight: 400,
            fontSize: { xs: '20px', md: '35px' },
            lineHeight: 1.4,
            textShadow: '0 2px 6px rgba(0,0,0,0.25)',
          }}
        >
          Fedezd fel a könyvelésben rejlő adataidat könnyen és érthetően
        </Typography>
        <Button
          variant="contained"
          size="large"
          href="#contact"
          sx={{
            bgcolor: 'white',
            color: '#2B2B28',
            px: 5,
            py: 2,
            fontSize: '17px',
            fontWeight: 700,
            textTransform: 'uppercase',
            borderRadius: '4px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            '&:hover': {
              bgcolor: '#f5f5f5',
              boxShadow: '0 6px 16px rgba(0,0,0,0.4)',
            },
          }}
        >
          IDŐPONTOT KÉREK
        </Button>
      </Container>
    </Box>
  );
};
