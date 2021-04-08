import '../styles/global.css'
import Head from 'next/head'
import Header from '../components/header'

function MyApp({ Component, pageProps }) {
  return (
    <div className="antialiased text-white relative min-h-screen bg-gray-900">

      <Head>
        <title>Hilmi Can Taşkıran</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main className="">
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
