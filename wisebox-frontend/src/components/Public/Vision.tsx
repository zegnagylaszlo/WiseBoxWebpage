import React from 'react';
import { Box, Typography } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export const Vision: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        bgcolor: 'primary.main',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Circles */}
      {[...Array(15)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            borderRadius: '50%',
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            width: { xs: '80px', md: '150px' },
            height: { xs: '80px', md: '150px' },
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          px: { xs: 3, md: 8, lg: 12 },
        }}
      >
        {/* Title */}
        <Typography
          variant="h2"
          sx={{
            mb: 6,
            color: 'white',
            fontSize: { xs: '32px', md: '45px' },
            fontWeight: 700,
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          VÍZIÓNK
        </Typography>

        {/* Two Column Layout */}
        <Box
          sx={{
            maxWidth: '1440px',
            mx: 'auto',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 6,
            alignItems: 'center',
          }}
        >
          {/* Left Column - Image */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            <img
              src="/images/family-using-computer-1.webp"
              alt="Team collaboration"
              style={{
                width: '100%',
                maxWidth: '450px',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
          </Box>

          {/* Right Column - Text and Button */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: 2,
              pl: { md: 4 },
            }}
          >
            {/* Quote Icon */}
            <FormatQuoteIcon
              sx={{
                fontSize: '64px',
                color: 'white',
                opacity: 0.5,
                mb: -2,
              }}
            />

            {/* Quote Text */}
            <Typography
              variant="h4"
              sx={{
                color: 'white',
                fontSize: { xs: '20px', md: '28px' },
                fontWeight: 400,
                fontStyle: 'italic',
                lineHeight: 1.4,
                textAlign: { xs: 'center', md: 'left' },
                mb: 1,
              }}
            >
              Olyan platform megalkotása, amely támogatja a menedzsmentet az adat-vezérelt döntéshozatalban
            </Typography>

            {/* Closing Quote Icon */}
            <FormatQuoteIcon
              sx={{
                fontSize: '64px',
                color: 'white',
                opacity: 0.5,
                transform: 'rotate(180deg)',
                alignSelf: { xs: 'center', md: 'flex-end' },
                mt: -2,
                mb: 3,
              }}
            />

            {/* Button */}
            <Box
              component="button"
              sx={{
                bgcolor: '#2B2B28',
                color: 'white',
                px: 5,
                py: 2.5,
                fontSize: '15px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                borderRadius: '4px',
                textTransform: 'none',
                alignSelf: { xs: 'center', md: 'flex-start' },
                '&:hover': {
                  bgcolor: '#1a1a18',
                },
              }}
            >
              Konzultációt kérek
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
