import { AiOutlineCloseCircle } from "react-icons/ai";

export default function MobileNav({ onToggle }) {
  return (
    <nav className='absolute top-0 left-0 w-full py-8 text-center bg-navy-blue sm:hidden'>
      <ul className='flex flex-col gap-4'>
        <li>
          <a className='text-sm hover:bg-[#323445] p-2 border-b border-white'>
            My Account
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-slate-200'>
            link
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-slate-200'>
            link
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-slate-200'>
            link
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-slate-200'>
            link
          </a>
        </li>
      </ul>
      <button className='absolute top-2 right-2 text-3xl' onClick={onToggle}>
        <AiOutlineCloseCircle />
      </button>
    </nav>
  );
}
