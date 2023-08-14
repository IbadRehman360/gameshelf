import { FaFacebookF, FaTwitter, FaSnapchatGhost } from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className='bg-navy-blue text-white p-8'>
      <section className='flex flex-col gap-1 text-xs justify-center sm:gap-4 sm:w-[75%] sm:mx-auto'>
        <div className='flex flex-col gap-2 sm:w-[100%] sm:flex-row sm:justify-between'>
          <p>
            Registered name and tradenarks are the copyright and property of
            their respective owner.
          </p>
          <div className='flex gap-4 mb-1 sm:mb-0'>
            <a href='#'>
              <FaFacebookF className='rounded-full border bg-gray-200 text-gray-800 text-3xl p-[4px]  hover:bg-transparent hover:border hover:text-white' />
            </a>
            <a href='#'>
              <FaTwitter className='rounded-full border bg-gray-200 text-gray-800 text-3xl p-[4px]  hover:bg-transparent hover:border hover:text-white' />
            </a>
            <a href='#'>
              <FaSnapchatGhost className='rounded-full border bg-gray-200 text-gray-800 text-3xl p-[4px]  hover:bg-transparent hover:border hover:text-white' />
            </a>
          </div>
        </div>
        <div className='flex gap-2 items-center sm:flex-col sm:items-start'>
          <a href='#'>Terms of Service</a>
          <BsFillCircleFill className='text-[5px] sm:hidden' />
          <a href='#'>Privacy Policy</a>
          <BsFillCircleFill className='text-[5px] sm:hidden' />
          <a href='#'>Legal</a>
        </div>
        <p>&copy;2023 Gameshelf</p>
      </section>
    </footer>
  );
}
