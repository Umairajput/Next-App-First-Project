import { Inter } from 'next/font/google'
import Navbar from './NavBar'
import LandingPage from './HomePage/Landing'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
    </>
  )
}
