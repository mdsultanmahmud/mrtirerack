import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '@/components/layout/RootLayout'
import Head from 'next/head'
import Banner from '@/components/home/Banner'
import LearnAndHow from '@/components/home/LearnAndHow'
import BestTire from '@/components/home/BestTire'
const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page || MR Tire Rack</title>
        <meta name='home-page' description="description of this page" />
      </Head>
      <div className="px-4">
        <Banner />
        <LearnAndHow />
        <BestTire />
      </div>
    </>
  )
}


HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>{page}</RootLayout>
  )
}