import { createTheme } from '@mui/material/styles';

const themeOptions = createTheme({
  palette: {
    primary: {
      main: '#0d6efd',
    },
    secondary: {
      main: '#363636',
    },
    error: {
      main: '#dc3545',
    },
    warning: {
      main: '#ffc107',
    },
    info: {
      main: '#f8f9fa',
    },
    success: {
      main: '#28a745',
    },
    text: {
      main: '#6A6A6A',
    },
  },
});

export default themeOptions;
