import Head from 'next/head'
import { useContext, useEffect } from 'react'
import Link from 'next/link'
import { AppContext } from './_app'

export default function Custom404 () {
  const { setFooterBgColor, setBreadCrumb } = useContext(AppContext)

  useEffect(() => {
    setBreadCrumb([{ label: 'Página no encontrada' }])
    setFooterBgColor('bg-footer-green')
    return () => {
      setBreadCrumb([])
    }
  }, [setBreadCrumb, setFooterBgColor])

  return (
    <>
      <Head>
        <title>Página no encontrada - Cifras sobre Biodiversidad de Colombia</title>
        <meta name="description" content="La página que buscas no existe. Explora las cifras sobre biodiversidad de Colombia." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-green-800 via-green-600 to-green-400 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-md w-full space-y-8 text-center">
          {/* 404 Icon */}
          <div className="mx-auto h-24 w-24 text-green-600">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>

          {/* Error Number */}
          <div className="text-9xl font-black text-white leading-none">
            404
          </div>

          {/* Main Message */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-white">
              Página no encontrada
            </h1>
            <p className="text-lg text-green-100 max-w-sm mx-auto">
              Lo sentimos, la página que buscas no existe o ha sido movida.
            </p>
          </div>

          {/* Helpful Links */}
          <div className="space-y-4 pt-8">
            <p className="text-sm text-green-200">
              Te sugerimos explorar:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
              >
                Ir al inicio
              </Link>
              <Link
                href="/colombia"
                className="inline-flex items-center px-6 py-3 border border-green-600 text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
              >
                Ver Colombia
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="pt-8 border-t border-green-300">
            <p className="text-sm text-green-200">
              Si crees que esto es un error, puedes contactarnos a través de nuestro{' '}
              <Link href="/mas/acerca-de" className="text-white hover:text-green-100 underline">
                formulario de contacto
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
