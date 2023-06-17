'use client';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const textColor = isOpen ? 'text-gray-800' : 'text-normal';

    return (
        <nav className={`absolute ${isOpen ? 'bg-white h-full' : ''} w-full grid grid-cols-2 md:grid-cols-3 transition-colors flex justify-between flex-wrap p-2 lg:p-6 `}>
          <div className={textColor + " flex  flex-shrink-0 mr-6"}>
            <Link href="/" className="font-semibold text-xl tracking-tight">george_taschina.dev</Link>
          </div>
          {/* <div className="block flex justify-end lg:hidden">
            <button className={textColor + "flex items-center px-3 py-2 border rounded border-gray-400 hover:text-white hover:border-white"} onClick={() => setIsOpen(!isOpen)}>
              <svg className={`${isOpen ? 'fill-gray-800' : 'fill-white'} h-3 w-3`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3a3 3 0 0 1 3-3h14a3 3 0 0 1 0 6H3a3 3 0 0 1-3-3zm0 8a3 3 0 0 1 3-3h14a3 3 0 0 1 0 6H3a3 3 0 0 1-3-3zm0 8a3 3 0 0 1 3-3h14a3 3 0 0 1 0 6H3a3 3 0 0 1-3-3z"/></svg>
            </button>
          </div>
          <div className={`lg:w-full ${isOpen ? '' : 'hidden'} lg:block lg:flex lg:items-center lg:w-auto`}>
            <div id="listaPagine" className="lg:flex-grow flex text-center justify-center items-center">
              <Link href="/articoli" className={textColor +" block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"}>
                Articoli
              </Link>
              <a href="#" className={textColor +" block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"}>
                Option 2
              </a>
              <a href="#" className={textColor +" block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"}>
                Option 3
              </a>
              <a href="#" className={textColor +" block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"}>
                Option 4
              </a>
              <a href="#" className={textColor +" block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"}>
                Option 5
              </a>
            </div>
          </div>
          <div className="lg:block hidden">

          </div> */}
        </nav>
    );
};

export default Navbar;