import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './globals.css'
import Main from '../Components/Main'

export default function Page() {
  return (
    <div className= 'flex flex-col min-h-screen'>
    <Navbar />
    <Header />
    <Main />
    <Footer />
    </div>
    
 );
};