import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <title>Flipmap Floor Rankings</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@ajwaxman" />
        <meta property="og:url" content="https://www.flipfloor.xyz" />
        <meta property="og:image" content="https://www.flipfloor.xyz/flip-floor.png" />
        <meta property="og:title" content="🔥 Flip Floor" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <meta
          property="og:description"
          content="See the Flipmap floor price for all compositions."
        />
        <meta property="og:image" content="/flip-floor.png" />
      </Head>
    </>
  )
}

export default MyApp
