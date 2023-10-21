import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '@/components/layout/RootLayout'
import Head from 'next/head'
import Banner from '@/components/home/Banner'
import LearnAndHow from '@/components/home/LearnAndHow'
import BestTire from '@/components/home/BestTire'
import TireReview from '@/components/home/TireReview'
const inter = Inter({ subsets: ['latin'] })

export default function HomePage({allBestTires}) {
  return (
    <>
      <Head>
        <title>Home Page || MR Tire Rack</title>
        <meta name='home-page' description="description of this page" />
      </Head>
      <div>
        <Banner />
        <LearnAndHow />
        {/* <TireReview /> */}
        {allBestTires.length > 0 && <BestTire allBestTires = {allBestTires}/>}
      </div>
    </>
  )
}


HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>{page}</RootLayout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/api/v1/best_tire")
  const bestTires = await res.json()
  return {
      props: {
          allBestTires: bestTires.data,
      },
      revalidate: 10
  }
}