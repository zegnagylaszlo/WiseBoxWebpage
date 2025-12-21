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
            mb: 2,
            fontSize: { xs: '14px', md: '16px' },
            fontWeight: 600,
            letterSpacing: '2px',
            opacity: 0.95,
          }}
        >
          KONTROLLING RENDSZER KKV-KNAK
        </Typography>
        <Typography
          variant="h1"
          color="white"
          gutterBottom
          sx={{
            mb: 3,
            fontSize: { xs: '32px', md: '50px' },
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          WISEBOX
        </Typography>
        <Typography
          variant="h2"
          color="white"
          sx={{
            mb: 5,
            fontWeight: 400,
            fontSize: { xs: '20px', md: '35px' },
            lineHeight: 1.4,
          }}
        >
          Fedezd fel a könyvelési adataidat könnyen és érthetően
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="#contact"
          sx={{
            px: 5,
            py: 2,
            fontSize: '17px',
            fontWeight: 700,
            textTransform: 'uppercase',
            borderRadius: '4px',
            boxShadow: '0 4px 12px rgba(0, 150, 75, 0.3)',
            '&:hover': {
              boxShadow: '0 6px 16px rgba(0, 150, 75, 0.4)',
            },
          }}
        >
          IDŐPONTOT KÉREK
        </Button>
      </Container>
    </Box>
  );
};
