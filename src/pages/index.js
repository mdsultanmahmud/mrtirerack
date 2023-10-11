import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '@/components/layout/RootLayout'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
   <h1>This is our home page</h1>
  )
}


HomePage.getLayout = function getLayout(page){
  return (
    <RootLayout>{page}</RootLayout>
  )
}