import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export const Szolgaltatasok: React.FC = () => {
  return (
    <Box sx={{ py: 8, minHeight: '60vh' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 4, textAlign: 'center', fontWeight: 700 }}>
          Szolgáltatások
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary' }}>
          A szolgáltatások oldal tartalma hamarosan elérhető lesz.
        </Typography>
      </Container>
    </Box>
  );
};
