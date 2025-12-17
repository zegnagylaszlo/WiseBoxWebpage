import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export const PartnersGrid: React.FC = () => {
  const partners = [
    {
      logo: '/images/hypermatrix_logo.webp',
      title: 'Informatikai szolgáltatónk',
      description: '✓ teljes informatikai hátterünket biztosítja\n✓ jelenlegi kor által megkövetelt információ-, és adatbiztonsági előírásokkal összhangban',
      buttonText: 'HyperMatrix',
      buttonUrl: 'https://www.hypermatrix.cloud/',
      buttonColor: '#00964B',
      logoMaxWidth: '200px',
      logoMaxHeight: '80px',
      logoContainerWidth: '450px',
    },
    {
      logo: '/images/expertconsult_long.webp',
      title: 'Teljeskörű szolgáltatás',
      description: '✓ teljes ügyviteli folyamat egy kézből üzemeltethető\n✓ dokumentum-kezelés, könyvelés, kontrolling',
      buttonText: 'ExpertConsult',
      buttonUrl: 'https://expertconsult.hu/',
      buttonColor: '#00964B',
      logoMaxWidth: '200px',
      logoMaxHeight: '80px',
      logoContainerWidth: '450px',
    },
    {
      logo: '/images/movement-makerz-kft-logo-1024x768.webp',
      title: 'Marketing szolgáltatás',
      description: '✓ marketing folyamatok és tevékenységek\n✓ Hirdetéskezelés, leadek generálása, automatizációk kiépítése, tartalomgyártás',
      buttonText: 'Movement Makerz',
      buttonUrl: 'https://movementmakerz.hu/',
      buttonColor: '#00964B',
      logoMaxWidth: '100%',
      logoMinWidth: '500px',
      logoMinHeight: '280px',
      logoMaxHeight: '350px',
      logoContainerWidth: '450px',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#FAFAFA',
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          mx: 'auto',
          px: { xs: 3, md: 6 },
        }}
      >
        {/* Three Partner Cards */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            justifyContent: 'center',
            alignItems: 'stretch',
          }}
        >
          {partners.map((partner, index) => (
            <Box
              key={index}
              sx={{
                bgcolor: 'white',
                borderRadius: '8px',
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                flex: '1',
                maxWidth: { md: '450px' },
              }}
            >
              {/* Logo */}
              <Box
                sx={{
                  mb: 3,
                  height: '180px',
                  width: partner.logoContainerWidth,
                  maxWidth: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                }}
              >
                <img
                  src={partner.logo}
                  alt={partner.buttonText}
                  style={{
                    maxWidth: partner.logoMaxWidth,
                    minWidth: partner.logoMinWidth || 'auto',
                    maxHeight: partner.logoMaxHeight,
                    minHeight: partner.logoMinHeight || 'auto',
                    width: 'auto',
                    height: 'auto',
                  }}
                />
              </Box>

              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#2B2B28',
                }}
              >
                {partner.title}
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  fontSize: '16px',
                  lineHeight: 1.8,
                  color: '#2B2B28',
                  whiteSpace: 'pre-line',
                  flexGrow: 1,
                }}
              >
                {partner.description}
              </Typography>

              {/* Button */}
              <Button
                variant="contained"
                size="large"
                href={partner.buttonUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '15px',
                  fontWeight: 600,
                  bgcolor: partner.buttonColor,
                  color: 'white',
                  borderRadius: '4px',
                  textTransform: 'none',
                  width: '200px',
                  '&:hover': {
                    bgcolor: partner.buttonColor,
                    opacity: 0.9,
                  },
                }}
              >
                {partner.buttonText}
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
