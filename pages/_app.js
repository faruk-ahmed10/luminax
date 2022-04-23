import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import GlobalProvider from '../context/globalProvider';
import SidebarProvider from '../context/sidebarProvider';


function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);

  return (
      <SidebarProvider>
        <GlobalProvider>
            {
              getLayout(<Component {...pageProps} />)
            }
        </GlobalProvider>
      </SidebarProvider>
  )
}

export default MyApp
