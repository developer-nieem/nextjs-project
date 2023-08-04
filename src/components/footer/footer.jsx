import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='flex justify-between py-7'>
                <p>Nieem's All right received</p>
                <p>
                    <Image src='/fb.png' width={25} height={25} alt='fb'></Image>
                </p>
            </div>
        </div>
    );
};

export default Footer;