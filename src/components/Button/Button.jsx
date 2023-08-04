import Link from 'next/link';
import React from 'react';

const Button = ({url, text}) => {
    return <>
    
    <button className='bg-gray-400 p-3 rounded-sm '> <Link href={url}>{text}</Link> </button>
    </>;
};

export default Button;