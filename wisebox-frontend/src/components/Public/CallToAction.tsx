import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

export const CallToAction: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#FFFFFF',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            mb: 4,
            color: '#2B2B28',
            fontWeight: 700,
            fontSize: { xs: '32px', md: '45px' },
            textTransform: 'uppercase',
          }}
        >
          KÉSZEN ÁLLSZ A KEZDÉSRE?
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 5,
            fontWeight: 400,
            fontSize: { xs: '18px', md: '22px' },
            color: '#2B2B28',
            lineHeight: 1.6,
          }}
        >
          Fedezd fel, hogyan segíthet a Wisebox jobban megérteni vállalkozásod pénzügyeit
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
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
          KAPCSOLATFELVÉTEL
        </Button>
      </Container>
    </Box>
  );
};
