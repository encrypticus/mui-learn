import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const values = {
    xs: 0,
    sm: 601,
    md: 769,
    lg: 961,
    xl: 1125,
    xxl: 1366
  };

  const theme = createMuiTheme({

  });

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
