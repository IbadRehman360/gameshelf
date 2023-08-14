import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import MobileNav from "./Navbar/MobileNav";
import BiggeScreenNav from "./Navbar/BiggerScreenNav";
import { LoggedInCta, NotLoggedInCta } from "./Navbar/Cta";

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
      <div className='flex items-center  px-4 py-6 text-white gap-10 sm:gap-0 sm:justify-between xl:px-0 xl:w-[80%] lg:mx-auto'>
        <button className='sm:hidden' onClick={dropdownNavToggleHandler}>
          <GiHamburgerMenu className='font-black text-4xl' />
        </button>
        <Link to='/' className='font-black text-2xl min-w-fit'>
          G A M E S H E L F
        </Link>

        {dropdownNav && <MobileNav onToggle={dropdownNavToggleHandler} />}
        <BiggeScreenNav />

        {loggedIn ? (
          <LoggedInCta onToggle={logInToggler} />
        ) : (
          <NotLoggedInCta onToggle={logInToggler} />
        )}
      </div>
    </header>
  );
}

export default Header;
