import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export const PannonUniversity: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#FFFFFF',
      }}
    >
      <Box
        sx={{
          maxWidth: '1440px',
          mx: 'auto',
          px: { xs: 3, md: 8, lg: 12 },
        }}
      >
        {/* Section Title */}
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            color: '#2B2B28',
            fontSize: { xs: '32px', md: '45px' },
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          Pannon Egyetem
        </Typography>

        {/* Green Underline */}
        <Box
          sx={{
            width: '80px',
            height: '4px',
            bgcolor: 'primary.main',
            mx: 'auto',
            mb: 3,
          }}
        />

        {/* Subtitle */}
        <Typography
          variant="h5"
          sx={{
            mb: 8,
            textAlign: 'center',
            fontSize: '22px',
            fontWeight: 400,
            color: '#2B2B28',
          }}
        >
          Együtt a jövő vállalkozóiért
        </Typography>

        {/* Two Column Layout */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 6,
            alignItems: 'center',
            mb: 6,
          }}
        >
          {/* Left Column - Text */}
          <Box>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontSize: '18px',
                lineHeight: 1.8,
                color: '#2B2B28',
              }}
            >
              Büszkén jelentjük be, hogy a Pannon Egyetem és a Wisebox csapata (Great BiExpert Kft. és B2B ProSales Kft.) háromoldalú együttműködési megállapodást kötött a gyakorlatorientált oktatás támogatására.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: '18px',
                lineHeight: 1.8,
                color: '#2B2B28',
              }}
            >
              A megállapodás keretében a Wisebox szoftver aktív szerepet kap:
            </Typography>
            <Box
              component="ul"
              sx={{
                mb: 4,
                pl: 3,
                '& li': {
                  mb: 2,
                  fontSize: '18px',
                  lineHeight: 1.8,
                  color: '#2B2B28',
                },
              }}
            >
              <li>az egyetem alap- és mesterképzéseiben</li>
              <li>valamint a controlling szakirányú továbbképzésekben</li>
            </Box>

            {/* Buttons */}
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
              }}
            >
              <Button
                variant="outlined"
                size="large"
                href="https://wisebox.hu/pannon-egyetem-wisebox-egyuttmukodes/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '15px',
                  fontWeight: 600,
                  borderColor: '#2B2B28',
                  color: '#2B2B28',
                  borderRadius: '4px',
                  '&:hover': {
                    borderColor: '#2B2B28',
                    bgcolor: 'rgba(43, 43, 40, 0.04)',
                  },
                }}
              >
                Bővebben
              </Button>
              <Button
                variant="contained"
                size="large"
                href="https://zek.uni-pannon.hu/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '15px',
                  fontWeight: 600,
                  bgcolor: '#2B2B28',
                  color: 'white',
                  borderRadius: '4px',
                  '&:hover': {
                    bgcolor: '#1F1F1D',
                  },
                }}
              >
                Pannon Egyetem
              </Button>
            </Box>
          </Box>

          {/* Right Column - Image */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            {/* Photo */}
            <Box
              sx={{
                width: '100%',
                maxWidth: '600px',
              }}
            >
              <img
                src="/images/wisebox-pannon-egyetem-egyuttmukodesi-megallapodas-kep-1024x683.webp"
                alt="Pannon Egyetem collaboration"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </Box>

            {/* Logo Below Image */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                bgcolor: 'white',
                width: '100%',
              }}
            >
              <img
                src="/images/wisebox-pannon-egyetem-zalaegerszeg-logo-vizszintes-1024x337.webp"
                alt="Pannon Egyetem"
                style={{
                  maxWidth: '550px',
                  width: '100%',
                  height: 'auto',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
