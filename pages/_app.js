import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const theme = createMuiTheme({

  });

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
