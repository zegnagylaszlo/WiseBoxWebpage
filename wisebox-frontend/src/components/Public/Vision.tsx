import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

export const Vision: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: 'primary.main',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        {/* Section Title */}
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            color: 'white',
            fontSize: { xs: '32px', md: '45px' },
            fontWeight: 700,
            textTransform: 'uppercase',
          }}
        >
          VÍZIÓNK
        </Typography>

        {/* White Underline */}
        <Box
          sx={{
            width: '80px',
            height: '4px',
            bgcolor: 'white',
            mx: 'auto',
            mb: 5,
          }}
        />

        {/* Quote */}
        <Typography
          variant="h4"
          sx={{
            mb: 6,
            color: 'white',
            fontSize: { xs: '22px', md: '28px' },
            fontWeight: 400,
            lineHeight: 1.6,
            maxWidth: '900px',
            mx: 'auto',
          }}
        >
          Olyan platform megalkotása, amely támogatja a menedzsmentet az adat-vezérelt döntéshozatalban
        </Typography>

        {/* Button */}
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: 'white',
            color: 'primary.main',
            px: 5,
            py: 2,
            fontSize: '17px',
            fontWeight: 700,
            textTransform: 'uppercase',
            borderRadius: '4px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            '&:hover': {
              bgcolor: '#f5f5f5',
              boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
            },
          }}
        >
          Konzultációt kérek
        </Button>
      </Container>
    </Box>
  );
};
