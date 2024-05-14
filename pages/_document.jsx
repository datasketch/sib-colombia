import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700;900&family=Inter:wght@400;500;700;900&family=Lato:wght@400;700;900&display=swap" rel="stylesheet" />
        {/* 100% privacy-first analytics */}
        <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>

        <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerPolicy="no-referrer-when-downgrade" /></noscript>
      </Head>
      <body>
        <script src="https://cdn.esm.sh/react-leaflet/MapContainer"></script>
        <script src="https://cdn.esm.sh/react-leaflet/TileLayer"></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
