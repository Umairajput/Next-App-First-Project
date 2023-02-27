import Link from 'next/link';
import Image from 'next/image'
import logo from '../assets/Images/clothes_logo.png'
import { useRouter } from 'next/router'
function Navbar() {
    const router = useRouter()
    const handleOk = () => {
      router.push('/Service')
    }
  return (
    <>
      <header>
        <h1>  My E-commerce Store</h1>
        <nav>
          <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><button onClick={handleOk}>Services</button></li>
          <li><Link href="#">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
