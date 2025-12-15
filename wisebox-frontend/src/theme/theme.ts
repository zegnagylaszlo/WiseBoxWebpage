import { createTheme } from '@mui/material/styles';

export const wiseboxTheme = createTheme({
  palette: {
    primary: {
      main: '#00964B', // Forest green - main CTA color
      dark: '#2E8640',  // Hover state
    },
    secondary: {
      main: '#6EC1E4', // Cyan blue accent
    },
    success: {
      main: '#61CE70', // Light green accent
    },
    text: {
      primary: '#2B2B28', // Near-black
      secondary: '#7A7A7A', // Medium gray
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F5F5',
    },
  },
  typography: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '35px',
      lineHeight: '40px',
      fontWeight: 600,
    },
    h2: {
      fontSize: '30px',
      lineHeight: '35px',
      fontWeight: 600,
    },
    h3: {
      fontSize: '25px',
      lineHeight: '30px',
      fontWeight: 600,
    },
    h4: {
      fontSize: '22px',
      lineHeight: '26px',
      fontWeight: 500,
    },
    body1: {
      fontSize: '17px',
      lineHeight: '23px',
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
          padding: '12px 24px',
          textTransform: 'none',
          fontWeight: 600,
          transition: 'background-color 0.3s ease',
        },
        containedPrimary: {
          backgroundColor: '#00964B',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#2E8640',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1140px !important',
        },
      },
    },
  },
});
