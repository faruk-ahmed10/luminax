import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import SidebarProvider from '../context/context'


function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SidebarProvider>
        {
          getLayout(<Component {...pageProps} />)
        }
    </SidebarProvider>
  )
}

export default MyApp
