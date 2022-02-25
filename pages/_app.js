import '../styles/globals.css'
import Layout from '../layouts/Layout'
import SidebarProvider from '../context/context'

function MyApp({ Component, pageProps }) {
  return (
    <SidebarProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SidebarProvider>
  )
}

export default MyApp
