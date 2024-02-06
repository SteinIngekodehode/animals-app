import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type ImageCardProps = {
    src: string,
    alt: string
    href:string
}

const ImageCard = ({ src, alt, href }: ImageCardProps) => {
    return (
        <div className='p-1 mb-4' style={{ width: '96px', height: '90px', position: 'relative'}}>
         <Link href={href} passHref>
             <Image 
                  src={src}
                  alt={alt}
                  fill
                  sizes= '96px, 90px'
                 />
             </Link>   
        </div>
    )
}

export default ImageCard;