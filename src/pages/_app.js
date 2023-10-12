import "@/styles/theme.css"
import '@/styles/globals.css'
// export default function MyApp({ Component, pageProps }) {
  
//   const getLayout = Component.getLayout || ((page) => page)
 
//   return getLayout(<Component {...pageProps} />)
// }

import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}


