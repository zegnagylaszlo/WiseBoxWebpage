import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#2B2B28',
        color: 'white',
        py: 6,
        mt: 0,
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
            mb: 4,
          }}
        >
          <Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Wisebox
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Könyvelési adatok könnyen és érthetően
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Kapcsolat
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Email: info@wisebox.hu
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Wisebox szoftver
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Döntéstámogató rendszer
            </Typography>
          </Box>
        </Box>
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', pt: 3 }}>
          <Typography variant="body2" align="center" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} Wisebox. Minden jog fenntartva.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
