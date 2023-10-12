import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '@/components/layout/RootLayout'
import Head from 'next/head'
import Banner from '@/components/home/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page || MR Tire Rack</title>
        <meta name='home-page' description="description of this page"/>
      </Head>
      <Banner/>
    </>
  )
}


HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>{page}</RootLayout>
  )
}