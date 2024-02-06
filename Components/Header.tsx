'use client'
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();

    let headerTitle;
    let headerDescription='Lorem ipsum dolor';

    if (pathname.includes('dogs')) {
        headerTitle = 'Dogs';
        headerDescription = 'Different breeds of dogs'
    } else if (pathname.includes('cats')) {
        headerTitle = 'Cats';
        headerDescription = 'Different breeds of cats'
    } else if (pathname.includes('hamsters')) {
        headerTitle = 'Hamsters';
        headerDescription = 'Different breeds of hamsters'
    
    } else {
        headerTitle = 'Welcome to the Pets App';
    }

    return (
        <div className='h-auto mt-5 text-center bg-gray-200'>
            <h1 className='px-3 py-1 text-2xl font-bold text-center'>Animals</h1>
            
            <p className='px-3 py-1 text-xs font-normal text-center text-l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minus totam numquam sequi maiores necessitatibus sapiente saepe provident est!</p>
            </div>
    )
}

export default Header;