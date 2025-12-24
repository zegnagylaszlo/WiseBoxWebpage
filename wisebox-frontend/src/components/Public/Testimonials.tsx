import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export const Testimonials: React.FC = () => {
  // TODO: Replace with real testimonials when available
  const testimonials = [
    {
      quote: "A Wisebox segítségével végre átlátom a cégem pénzügyi helyzetét. Hetente csak 10 percet kell rászánnom a jelentések áttekintésére.",
      name: "Nagy Péter",
      position: "Ügyvezető",
      company: "TechSolutions Kft.",
    },
    {
      quote: "Korábban napokat töltöttem Excel táblázatokkal. Most minden adat egy helyen van, érthető formában. Félállás munkát spóroltunk meg.",
      name: "Kovács Anna",
      position: "Pénzügyi vezető",
      company: "Marketing Pro Bt.",
    },
    {
      quote: "A könyvelőmmel folytatott e-mail ping-pong véget ért. A Wisebox dashboardon azonnal látom, hogy min állunk. Profi kontrolling KKV-knak.",
      name: "Szabó Gábor",
      position: "Tulajdonos",
      company: "LogisztikaMester Zrt.",
    },
  ];

  return (
    <Box
      id="referenciaink"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: '#FFFFFF',
      }}
    >
      <Container>
        {/* Section Header - Modern Pattern */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              color: 'primary.main',
              mb: 2,
            }}
          >
            ÜGYFELEINK VÉLEMÉNYE
          </Typography>
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              color: 'text.primary',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Mit mondanak ügyfeleink?
          </Typography>
        </Box>

        {/* Testimonials Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              sx={{
                p: 4,
                bgcolor: '#FFFFFF',
                borderRadius: '12px',
                borderLeft: '4px solid',
                borderColor: 'primary.main',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.06)',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0px 4px 16px rgba(0,0,0,0.1)',
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  fontStyle: 'italic',
                  color: 'text.primary',
                  fontSize: '17px',
                  lineHeight: 1.7,
                }}
              >
                "{testimonial.quote}"
              </Typography>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}
                >
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'primary.main', fontSize: '14px' }}
                >
                  {testimonial.position}, {testimonial.company}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
