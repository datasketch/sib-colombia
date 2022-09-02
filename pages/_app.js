import { createContext, useState } from 'react'
import Layout from '../components/Layout'
import '../styles/globals.css'

export const AppContext = createContext()

function MyApp ({ Component, pageProps }) {
  const [footerBgColor, setFooterBgColor] = useState('bg-footer-green')
  return (
    <AppContext.Provider value={{ footerBgColor, setFooterBgColor }}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </AppContext.Provider>
  )
}

export default MyApp
