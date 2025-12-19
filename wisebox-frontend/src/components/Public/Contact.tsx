import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export const Contact: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'primary.main', // Green
      }}
    >
      <Container maxWidth="xl">
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
          KÉSZEN ÁLLSZ A KEZDÉSRE? <br />
          <br />
          VEDD FEL VELÜNK A KAPCSOLATOT!
        </Typography>

        {/* White Underline */}
        <Box
          sx={{
            width: '80px',
            height: '4px',
            bgcolor: 'white',
            mx: 'auto',
            mb: 4,
          }}
        />

        {/* Subtitle */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 8,
            px: { xs: 2, md: 2, lg: 3, xl: 4 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              fontSize: { xs: '20px', md: '26px', lg: '28px', xl: '30px' },
              fontWeight: 600,
              textAlign: 'center',
              lineHeight: 1.3,
              whiteSpace: { md: 'nowrap' },
            }}
          >
            Fedezd fel, hogyan segíthet a Wisebox még jobban megérteni céged könyvelési adatait
          </Typography>
        </Box>

        {/* Two Column Layout */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 6,
            maxWidth: '1000px',
            mx: 'auto',
          }}
        >
          {/* Left Column - Text */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: 'white',
                fontSize: '18px',
                lineHeight: 1.6,
              }}
            >
              Ha megtetszett a WiseBox kontrolling szoftverünk és szeretnél egy bemutatót, konzultációt kérni,
              kérjük írj az email címünkre vagy hívd az számodra legszompatikusabb Üzletfejlesztési partnerünket!
            </Typography>
          </Box>

          {/* Right Column - Contact Info */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              justifyContent: 'center',
            }}
          >
            {/*
            Phone
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  bgcolor: 'white',
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <PhoneIcon sx={{ fontSize: '30px' }} />
              </Box>
              <Typography
                variant="h5"
                sx={{
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 600,
                }}
              >
                +36 70 931 9828
              </Typography>
            </Box>
            */} 

            {/* Email */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  bgcolor: 'white',
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <EmailIcon sx={{ fontSize: '30px' }} />
              </Box>
              <Typography
                variant="h5"
                sx={{
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 600,
                }}
              >
                info@wisebox.hu
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
