import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export const BusinessPartner: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#3D3D3A',
      }}
    >
      <Container>
        {/* Section Title */}
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            color: 'white',
            fontSize: { xs: '32px', md: '45px' },
            fontWeight: 700,
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          ÜZLETFEJLESZTÉSI PARTNEREINK
        </Typography>

        {/* Blue Underline */}
        <Box
          sx={{
            width: '80px',
            height: '4px',
            bgcolor: '#6EC1E4',
            mx: 'auto',
            mb: 8,
          }}
        />

        {/* Partner Card */}
        <Box
          sx={{
            maxWidth: '740px',
            mx: 'auto',
            bgcolor: 'white',
            borderRadius: '8px',
            p: { xs: 4, md: 6 },
            textAlign: 'center',
          }}
        >
          {/* Profile Image */}
          <Box
            sx={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              mx: 'auto',
              mb: 3,
              overflow: 'hidden',
            }}
          >
            <img
              src="/images/DezsoTibor_Portre.webp"
              alt="Dezső Tibor"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>

          {/* Name */}
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              fontSize: '28px',
              fontWeight: 700,
              color: '#2B2B28',
            }}
          >
            Dezső Tibor
          </Typography>

          {/* Title */}
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: '18px',
              color: '#2B2B28',
            }}
          >
            Üzletfejlesztési manager
          </Typography>

          {/* Company */}
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontSize: '16px',
              color: '#2B2B28',
              fontWeight: 500,
            }}
          >
            B2B ProSales Kft. ügyvezetője
          </Typography>

          {/* Contact Icons */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
            }}
          >
            {/* Email Icon */}
            <Box
              component="a"
              href="mailto:dezso.tibor@b2b-prosales.com"
              sx={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                bgcolor: '#FF8C00',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <EmailIcon sx={{ color: 'white', fontSize: '24px' }} />
            </Box>

            {/* Phone Icon */}
            <Box
              component="a"
              href="tel:+36301234567"
              sx={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                bgcolor: '#00964B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <PhoneIcon sx={{ color: 'white', fontSize: '24px' }} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
