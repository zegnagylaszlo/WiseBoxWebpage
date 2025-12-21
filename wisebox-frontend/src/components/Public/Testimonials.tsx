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
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'white',
      }}
    >
      <Container>
        {/* Section Title */}
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            color: '#2B2B28',
            fontSize: { xs: '32px', md: '45px' },
            fontWeight: 700,
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          MIT MONDANAK ÜGYFELEINK?
        </Typography>

        {/* Green Underline */}
        <Box
          sx={{
            width: '80px',
            height: '4px',
            bgcolor: 'primary.main',
            mx: 'auto',
            mb: 8,
          }}
        />

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
                bgcolor: '#f3fff6',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontStyle: 'italic',
                  color: '#2B2B28',
                  fontSize: '15px',
                  lineHeight: 1.7,
                }}
              >
                "{testimonial.quote}"
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {testimonial.name.charAt(0)}
                </Box>
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 600, color: '#2B2B28' }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: 'primary.main' }}
                  >
                    {testimonial.position}, {testimonial.company}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
