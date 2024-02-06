// Main.tsx for the Landing Page
import React from 'react';
import ImageCard from './ImageCard'; // Assuming this is your custom component

const Main = () => {
    return (
        <div className='flex flex-col items-center justify-center flex-grow w-full'>
            
            <h2 className='mb-5 text-xl font-semibold'>Dogs</h2>
            <ImageCard src='/images/dogs-tailwind.jpg' alt='Dog' href='/dogs-page' />
            
            <h2 className='mb-5 text-xl font-semibold'>Cats</h2>
            <ImageCard src='/images/cats-tailwind.jpg' alt='Cat' href='/cats-page' />
            
            <h2 className='mb-5 text-xl font-semibold'>Hamsters</h2>
            <ImageCard src='/images/hamsters-tailwind.jpg' alt='Hamster' href='/hamsters-page' />
            </div>
    );
};

export default Main;
