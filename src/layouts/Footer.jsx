// import { FaFacebookF, FaTwitter, FaSnapchatGhost } from "react-icons/fa";
// import { BsFillCircleFill } from "react-icons/bs";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="footer grid-cols-2 grid-rows-2 gap-4 border-t border-gray-600 bg-[#282b35] p-10 text-white sm:justify-between sm:gap-8 md:grid-cols-4 md:grid-rows-1">
        <div>
          <span className="footer-title">Services</span>
          <div className="grid gap-2 text-xs">
            <Link className="link-hover link">Branding</Link>
            <Link className="link-hover link">Design</Link>
            <Link className="link-hover link">Marketing</Link>
            <Link className="link-hover link">Advertisement</Link>
          </div>
        </div>
        <div className="hidden md:flex md:flex-col lg:flex">
          <div className="grid gap-2 text-xs lg:text-sm">
            <span className="footer-title">Legal</span>
            <Link className="link-hover link">Terms of use</Link>
            <Link className="link-hover link">Privacy policy</Link>
            <Link className="link-hover link">Cookie policy</Link>
          </div>
        </div>
        <div className="flex-col sm:flex">
          <span className="footer-title">Company</span>
          <div className="grid gap-2 text-xs lg:text-sm">
            <Link className="link-hover link" to="/about">
              About us
            </Link>
            <Link className="link-hover link">Contact</Link>
            <Link className="link-hover link">Jobs</Link>
            <Link className="link-hover link">Press kit</Link>
          </div>
        </div>
        <div className="col-span-2 mt-4 w-full sm:mt-0 md:flex md:flex-col lg:flex">
          <div className="w-full flex-col sm:flex">
            <span className="footer-title">Newsletter</span>
            <div className="form-control">
              <label className="label my-1">
                <span className="label-text text-xs text-white lg:text-sm">
                  Enter your email address
                </span>
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16 text-sm text-black"
              />
              <button className="btn btn-primary absolute right-0 top-0 rounded-l-none text-xs">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center border-t border-gray-600 bg-[#282b35] p-7 text-white">
        <div>
          <p>Copyright © 2023 - All right reserved by GameStacks Ltd</p>
        </div>
      </footer>
    </div>
  );
}
