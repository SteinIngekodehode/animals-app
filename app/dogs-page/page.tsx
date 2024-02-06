import AnimalsMain from '../../Components/AnimalsMain'
import Header from '../../Components/Header'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
//import ImageCard from '@/Components/ImageCard'

export default function Page() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar/>
            <Header/>
            <AnimalsMain/>
            
            <Footer/>
           </div>
    )
}