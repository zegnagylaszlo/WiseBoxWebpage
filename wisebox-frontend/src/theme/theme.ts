import { createTheme } from '@mui/material/styles';

// Modern minimalist design system for WISEBOX
export const wiseboxTheme = createTheme({
  palette: {
    primary: {
      main: '#0A7B7F', // Deep Teal - modern, professional, tech-forward
      dark: '#085F62',  // Darker teal for hover states
      light: '#5EACAF', // Lighter teal for backgrounds
    },
    secondary: {
      main: '#FF6B6B', // Coral Orange - CTAs, important highlights
      dark: '#E85555',  // Darker coral for hover
    },
    info: {
      main: '#4A90E2', // Sky Blue - secondary actions, info elements
    },
    success: {
      main: '#7AC87D', // Sage Green - success states, positive metrics
    },
    text: {
      primary: '#2C3E50', // Charcoal - primary text
      secondary: '#5A6C7D', // Slate - secondary text
    },
    background: {
      default: '#FFFFFF', // Pure white
      paper: '#F8F9FA', // Cloud - light background sections
    },
    // Custom colors for design system
    grey: {
      50: '#F8F9FA',
      100: '#E9ECEF',
      200: '#DEE2E6',
      300: '#CED4DA',
      400: '#ADB5BD',
      500: '#6C757D',
      600: '#5A6C7D',
      700: '#495057',
      800: '#343A40',
      900: '#2C3E50',
    },
  },
  typography: {
    fontFamily: '"Inter", "system-ui", "-apple-system", "sans-serif"',
    // Display - Hero headlines
    h1: {
      fontSize: '48px',
      lineHeight: '56px',
      fontWeight: 700,
      '@media (max-width:960px)': {
        fontSize: '36px',
        lineHeight: '44px',
      },
    },
    // Major sections
    h2: {
      fontSize: '36px',
      lineHeight: '44px',
      fontWeight: 600,
      '@media (max-width:960px)': {
        fontSize: '28px',
        lineHeight: '36px',
      },
    },
    // Subsections
    h3: {
      fontSize: '28px',
      lineHeight: '36px',
      fontWeight: 600,
      '@media (max-width:960px)': {
        fontSize: '22px',
        lineHeight: '30px',
      },
    },
    // Small headings
    h4: {
      fontSize: '20px',
      lineHeight: '28px',
      fontWeight: 600,
    },
    // Intros, important text
    h5: {
      fontSize: '18px',
      lineHeight: '28px',
      fontWeight: 400,
    },
    // Standard body text
    body1: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    // Smaller body text
    body2: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 400,
    },
    // Captions, labels
    caption: {
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '16px 32px',
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '16px',
          transition: 'all 0.2s ease-in-out',
          height: '48px',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
        },
        containedPrimary: {
          color: '#FFFFFF', // White text on Teal background
          backgroundColor: '#0A7B7F',
          '&:hover': {
            backgroundColor: '#085F62',
          },
        },
        containedSecondary: {
          color: '#FFFFFF', // White text on Teal background
          backgroundColor: '#0A7B7F',
          '&:hover': {
            backgroundColor: '#085F62',
          },
        },
        outlinedPrimary: {
          borderColor: '#0A7B7F',
          color: '#0A7B7F',
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
            backgroundColor: 'rgba(10,123,127,0.04)',
          },
        },
        sizeSmall: {
          height: '40px',
          padding: '12px 24px',
          fontSize: '14px',
        },
        sizeLarge: {
          height: '56px',
          padding: '18px 40px',
          fontSize: '18px',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1200px !important',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0px 2px 8px rgba(0,0,0,0.06)',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0px 4px 16px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            backgroundColor: '#FFFFFF',
            '&:hover fieldset': {
              borderColor: '#0A7B7F',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0A7B7F',
              borderWidth: '2px',
            },
          },
          '& .MuiInputBase-input': {
            padding: '12px 16px',
            fontSize: '16px',
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: '12px !important',
          boxShadow: '0px 2px 8px rgba(0,0,0,0.06)',
          '&:before': {
            display: 'none',
          },
          marginBottom: '16px',
        },
      },
    },
  },
  spacing: 8, // 8px base unit
});
