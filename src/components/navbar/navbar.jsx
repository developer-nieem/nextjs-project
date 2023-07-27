import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const links = [
        {
          "id": 1,
          "slug": "home",
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
    return (
        <div>
            <Link href='/'>Nieem's</Link>
            <nav>
              {  links.map(item => <Link key={item.id} href={item.slug}> {item.title} </Link> )}
            </nav>
        </div>
    );
};

export default Navbar;