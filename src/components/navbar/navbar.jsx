'use client';
import Link from 'next/link';
import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

const Navbar = () => {
    const links = [
        {
          "id": 1,
          "slug": "/",
          "title": "Home"
        },
        {
          "id": 2,
          "slug": "about",
          "title": "About"
        },
        {
          "id": 3,
          "slug": "blog",
          "title": "Blog"
        },
        {
          "id": 4,
          "slug": "portfolio",
          "title": "Portfolio"
        },
        {
          "id": 5,
          "slug": "dashboard",
          "title": "Dashboard"
        },
        {
          "id": 6,
          "slug": "contact",
          "title": "Contact"
        }
      ]

      const {name} =  useContext(ThemeContext);
      console.log(name);
      
    return (
        <div className='flex justify-between pt-5'>
            <Link href='/'>Nieem's</Link>
            <nav className='space-x-5 '>
              {  links.map(item => <Link key={item.id} href={item.slug}> {item.title} </Link> )}
            </nav>
        </div>
    );
};

export default Navbar;