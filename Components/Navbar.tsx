import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='flex flex-row items-center justify-between w-full h-12 px-2 bg-gray-200'>
            <Link href='/' passHref>
             <div className='relative w-16 h-auto sm:w-20 sm:h-10 md:w-24 md:h-12'>
                <Image 
                    src='/images/dogs-logo.png'
                    alt='Logo'
                    width={48}
                    height={48}
                    />
             </div>
            </Link>
            <button className="w-auto px-3 py-1 font-bold text-black border-2 border-gray-500 rounded hover:bg-black">
                Menu
            </button>
        </nav>
    );
}

export default Navbar;
