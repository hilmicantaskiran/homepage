import '../main.css'
import Head from 'next/head'
import Header from '../components/header'
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={process.env.NEXT_PUBLIC_URL}
    >
      <div className="antialiased text-white relative min-h-screen bg-gray-900">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/icons/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/icons/favicon/safari-pinned-tab.svg" color="#5bbad5" />
          <title>Hilmi Can Taşkıran</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </Auth0Provider>
  )
}

export default MyApp
