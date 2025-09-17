import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
        text: {
            primary: '#333333',
        },
        dark: {
            main: '#121212',
        },
    },
    typography: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            laptop: 1400,
            xl: 1536,
        },
    },

});

export default customTheme;