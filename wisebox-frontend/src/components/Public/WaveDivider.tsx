import React from 'react';
import { Box } from '@mui/material';

interface WaveDividerProps {
  variant?: 'green-to-white' | 'white-to-green' | 'green-dark';
  flip?: boolean;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  variant = 'green-to-white',
  flip = false
}) => {
  const getColors = () => {
    switch (variant) {
      case 'green-to-white':
        return { top: '#00964B', bottom: '#ffffff' };
      case 'white-to-green':
        return { top: '#ffffff', bottom: '#00964B' };
      case 'green-dark':
        return { top: '#00964B', bottom: '#2B2B28' };
      default:
        return { top: '#00964B', bottom: '#ffffff' };
    }
  };

  const colors = getColors();

  return (
    <Box
      sx={{
        width: '100%',
        lineHeight: 0,
        transform: flip ? 'rotate(180deg)' : 'none',
        my: 0,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: colors.top, stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: colors.bottom, stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          d="M0,0 L0,60 Q360,90 720,60 T1440,60 L1440,0 Z"
          fill={colors.top}
        />
        <path
          d="M0,60 Q360,90 720,60 T1440,60 L1440,120 L0,120 Z"
          fill={colors.bottom}
        />
      </svg>
    </Box>
  );
};
