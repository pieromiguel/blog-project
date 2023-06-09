import './Header.css';
import "@theme-toggles/react/css/Within.css";
import { Within } from "@theme-toggles/react";
import { useState } from 'react';
import NavBar from '../NavBar/NavBar';

export const Header = () => {

  const [isToggled, setToggle] = useState(false);

  return (
    <>
      <header className='border-b border-b-white-500 mb-10'>
        <nav className="border-gray-200 text-white px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center">
              <img src="/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white dark:text-white">Blog</span>
            </a>
            <div className="flex items-center lg:order-2">
              <a href="#" className="text-gray-800 dark:text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2   focus:outline-none dark:focus:ring-gray-800"><Within className="text-4xl text-white" duration={750} toggled={isToggled} toggle={setToggle} /></a>
              <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-row mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <NavBar />
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

