import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

export const CallToAction: React.FC = () => {
  return (
    <Box
      sx={{
        py: 10,
        bgcolor: 'background.paper',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          gutterBottom
          sx={{ mb: 3, color: 'text.primary', fontWeight: 600 }}
        >
          Készen állsz a kezdésre?
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ mb: 4, fontWeight: 400 }}
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
            fontSize: '18px',
          }}
        >
          Kapcsolatfelvétel
        </Button>
      </Container>
    </Box>
  );
};
