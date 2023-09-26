
import DragonPovider from '@/context/DragonProvider'
import Header from '../components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import RocketProvider from '@/context/RocketProvider'
import MissionProvider from '@/context/MissionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SkySpace',
  description: 'Travel in space',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>
      
        <header className='mb-20 top-0 sticky bg-white z-10'>
          <Header/>

          </header>


        
        <main className='w-full sm:w-[90%] mx-auto px-5 sm:px-0 mb-20'>
        <DragonPovider>
         <RocketProvider>
          <MissionProvider>
        {children}
        </MissionProvider>
        </RocketProvider>
        </DragonPovider>

       
       
        </main>

        

        </body>
    </html>
  )
}
