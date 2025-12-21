import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupsIcon from '@mui/icons-material/Groups';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({ revenue: 0, users: 0, hours: 0 });
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: TrendingUpIcon,
      value: 25,
      suffix: '+ milliárd Ft',
      title: 'árbevétel',
      description: 'Wisebox szoftverünket használó cégek éves árbevétele meghaladta a 25 milliárd forintot 2024-ben',
      animationKey: 'revenue' as const,
    },
    {
      icon: GroupsIcon,
      value: 80,
      suffix: '+',
      title: 'felhasználó cég',
      description: 'Jelenleg több mint 80 cég szavazott bizalmat és használja a rendszerünket nap mint nap, és ez a szám folyamatosan növekszik',
      animationKey: 'users' as const,
    },
    {
      icon: AccessTimeIcon,
      value: 6700,
      suffix: '+',
      title: 'megtakarított óra',
      description: '3-5 főnél fél fő munkáját,\n5-10 főnél 1 fő munkáját,\n10+ főnél 1.5+ fő munkáját tudjuk megtakarítani hónapról hónapra',
      animationKey: 'hours' as const,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedValues({
        revenue: Math.floor(25 * progress),
        users: Math.floor(80 * progress),
        hours: Math.floor(6700 * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <Box
      ref={statsRef}
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#f3fff6',
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
          WISEBOX SZÁMOKBAN
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

        {/* Stats Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
            mb: 6,
          }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const displayValue = stat.animationKey === 'revenue'
              ? animatedValues.revenue
              : stat.animationKey === 'users'
              ? animatedValues.users
              : animatedValues.hours;

            return (
              <Box
                key={index}
                sx={{
                  textAlign: 'center',
                  p: 4,
                  bgcolor: 'white',
                  borderRadius: '8px',
                  transition: 'transform 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Icon
                  sx={{
                    fontSize: '48px',
                    color: 'primary.main',
                    mb: 2,
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    mb: 1,
                    color: '#2B2B28',
                    fontSize: { xs: '32px', md: '40px' },
                    fontWeight: 700,
                  }}
                >
                  {displayValue.toLocaleString('hu-HU')}{stat.suffix}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    color: 'primary.main',
                    fontSize: { xs: '18px', md: '20px' },
                    fontWeight: 600,
                    textTransform: 'lowercase',
                  }}
                >
                  {stat.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#2B2B28',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {stat.description}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};
