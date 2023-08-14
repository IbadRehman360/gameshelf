import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineCloseCircle,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Header() {
  const [dropdownNav, setDropdownNav] = useState(false);
  const dropdownNavToggleHandler = () => {
    setDropdownNav((prev) => !prev);
  };

  const [loggedIn, setLoggedIn] = useState(false);
  const logInToggler = () => {
    setLoggedIn((prev) => !prev);
  };

  return (
    <header className='bg-navy-blue'>
      <div className='flex items-center  px-4 py-6 text-white gap-10 lg:justify-between xl:px-0 xl:w-[80%] lg:mx-auto'>
        <button className='lg:hidden' onClick={dropdownNavToggleHandler}>
          <GiHamburgerMenu className='font-black text-4xl' />
        </button>
        <Link to='/' className='font-black text-2xl min-w-fit'>
          G A M E S H E L F
        </Link>

        {/* Mobile navigation */}
        {dropdownNav && <DropdownNav onToggle={dropdownNavToggleHandler} />}

        {/* Tablet, Laptop and Desktop navigation */}
        <Nav />

        {loggedIn ? (
          <LoggedInCta onToggle={logInToggler} />
        ) : (
          <NotLoggedInCta onToggle={logInToggler} />
        )}
      </div>
    </header>
  );
}

function LoggedInCta({ onToggle }) {
  return (
    <div className='hidden lg:flex gap-6 items-center' onClick={onToggle}>
      <Link>
        <AiOutlineShoppingCart className='text-2xl' />
      </Link>
      <Link>
        <AiOutlineHeart className='text-2xl' />
      </Link>
      <Link className='text-sm hover:bg-[#323445] p-2 rounded-full'>
        username &gt;
      </Link>
    </div>
  );
}

function NotLoggedInCta({ onToggle }) {
  return (
    <div
      className='border-t py-4 fixed z-10 bottom-0 left-0 w-full  shadow-lg flex justify-center items-center gap-4 text-sm font-light lg:w-fit lg:border-none lg:static lg:py-0 lg:z-0 lg:shadow-none'
      onClick={onToggle}
    >
      <Link className='border border-black py-1 w-[40%] text-center rounded text-black lg:w-fit lg:px-8 lg:rounded-full lg:py-2  lg:bg-[#323445] lg:border-none lg:text-white lg:font-medium'>
        Sell
      </Link>
      <Link className='border border-black py-1 w-[40%] text-center rounded bg-navy-blue lg:w-fit lg:px-8 lg:rounded-full lg:py-2  lg:bg-[#323445] lg:border-none lg:text-white lg:font-medium'>
        Log In/Sign Up
      </Link>
    </div>
  );
}

function Nav() {
  return (
    <nav className='hidden text-white mb-12 lg:inline-block'>
      <ul className='flex gap-12'>
        <li>
          <a href='#'>linkText</a>
        </li>
        <li>
          <a href='#'>linkText</a>
        </li>
        <li>
          <a href='#'>linkText</a>
        </li>
        <li>
          <a href='#'>linkText</a>
        </li>
      </ul>
    </nav>
  );
}

function DropdownNav({ onToggle }) {
  return (
    <nav className='absolute top-0 left-0 w-full py-8 text-center bg-navy-blue lg:hidden'>
      <ul className='flex flex-col gap-4'>
        <li>
          <a className='text-sm hover:bg-[#323445] p-2 rounded-full'>
            username &gt;
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-slate-200'>
            linkText
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-slate-200'>
            linkText
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-slate-200'>
            linkText
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-slate-200'>
            linkText
          </a>
        </li>
      </ul>
      <button className='absolute top-2 right-2 text-3xl' onClick={onToggle}>
        <AiOutlineCloseCircle />
      </button>
    </nav>
  );
}

export default Header;
