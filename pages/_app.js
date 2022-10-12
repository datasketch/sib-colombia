import Head from 'next/head'
import { createContext, useState } from 'react'
import Layout from '../components/Layout'
import '../styles/globals.css'

export const AppContext = createContext()

function MyApp ({ Component, pageProps }) {
  const [footerBgColor, setFooterBgColor] = useState('bg-footer-green')
  const [breadCrumb, setBreadCrumb] = useState([])
  return (
    <AppContext.Provider value={{ footerBgColor, setFooterBgColor, breadCrumb, setBreadCrumb }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  )
}

export default MyApp
