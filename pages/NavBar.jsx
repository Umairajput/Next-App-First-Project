import Link from 'next/link';
import Image from 'next/image'
import logo from '../assets/Images/clothes_logo.png'
import { useRouter } from 'next/router'
function Navbar() {
    const router = useRouter()
  return (
    <>
      <header>
        <h1>  My E-commerce Store</h1>
        <nav>
          <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/Service">Services</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      {/* <h1  className=' bg-slate-500 p-5 '>hello</h1> */}
    </>
  );
}

export default Navbar;
