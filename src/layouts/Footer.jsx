// import { FaFacebookF, FaTwitter, FaSnapchatGhost } from "react-icons/fa";
// import { BsFillCircleFill } from "react-icons/bs";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="footer grid-cols-2 grid-rows-2 border-t border-gray-600 md:grid-cols-4 md:grid-rows-1 py-10 px-10 sm:gap-8  gap-4 text-white bg-[#282b35]  sm:justify-between ">
        <div>
          <span className="footer-title ">Services</span>
          <div className="md:lg-sm text-xs gap-2 grid">
            <a className="link link-hover ">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
        </div>
        <div className="hidden md:flex md:flex-col lg:flex">
          <div className=" lg:text-sm text-xs gap-2 grid">
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </div>
        <div className=" sm:flex flex-col sm:flex-end">
          <span className="footer-title">Company</span>
          <div className=" lg:text-sm text-xs gap-2 grid">
            <Link to="/about" className="link link-hover">
              About us
            </Link>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
        </div>
        <div className="col-span-2 mt-4 sm:mt-0 md:flex md:flex-col w-full lg:flex">
          <div className="w-full sm:flex flex-col sm:flex-end">
            <span className="footer-title">Newsletter</span>
            <div className="form-control ">
              <label className="label mb-1 mt-1">
                <span className="label-text  lg:text-sm text-xs text-white">
                  Enter your email address
                </span>
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered text-sm w-full pr-16 text-black"
              />
              <button className="btn btn-primary sm:text-md text-xs absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-7  text-white bg-[#282b35] border-t     border-gray-600 ">
        <div>
          <p>Copyright © 2023 - All right reserved by GameStacks Ltd</p>
        </div>
      </footer>
    </div>
  );
}
