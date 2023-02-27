import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import logo from '../assets/Images/clothes_logo.png'
import { useRouter } from 'next/router'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const handleOk = () => {
    router.push('/Service')
  }
  return (
    <>
      <nav>
        <div class="logo">
          <h2 className='logo_heading'>Clothes Sports</h2>
        </div>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/Service">Services</Link></li>
          <li><Link href="#">Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}
