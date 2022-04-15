import Layout from '../Components/Layout'
import '../styles/globals.css'
// theme
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    typography : {
      header : {
        color : '#fff'
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>  
  )
}

export default MyApp
