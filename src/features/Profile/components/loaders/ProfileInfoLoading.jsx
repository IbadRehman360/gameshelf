import { useState } from "react";
import { AiFillCamera } from "react-icons/ai";

export default function ProfileInfo() {
  const [showEditImage, setShowEditImage] = useState(false);
  return (
    <div className="order-0 sm:order-0  md:order-3 lg:text-right ">
      <div className="mt-16 order-0 md:order-0 lg:order-1 text-center md:mt-0 ">
        <div className="w-full mb-4 px-4 lg:order-2 flex justify-center">
          <div className="relative">
            {showEditImage && (
              <button
                className="absolute md:top-1/4  bottom-1 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50"
                onMouseEnter={() => setShowEditImage(true)}
                onMouseLeave={() => setShowEditImage(false)}
              >
                <AiFillCamera color="white" size="1.5rem" />
                <span className="text-white text-xs">Edit</span>
              </button>
            )}
            <div className="rounded-full">
              <div
                className={`bg-slate-500 animate-pulse rounded-full h-[7rem] align-middle border-none mr-0 -mt-28 md:-mt-12 ml-0 lg:-ml-0 w-[7rem]`}
              ></div>
            </div>
          </div>
        </div>
        <div className="bg-slate-400 w-36 mx-auto h-6 animate-pulse my-2"></div>
        <p className="bg-slate-400 animate-pulse w-24 mx-auto h-6"></p>
      </div>
      <div className="flex justify-center gap-2 md:gap-1  mt-5  lg:px-3 ">
        <button
          className="bg-red-500 hover:bg-red-400 active:bg-red-400 uppercase text-white font-bold hover:shadow-md shadow text-xs px-6 py-2.5 md:mr-2 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Connect
        </button>
        <button
          className="bg-gray-600 hover:bg-gray-500 active:bg-red-400 uppercase text-white font-bold hover:shadow-md shadow text-xs px-6 py-2.5 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Message
        </button>
      </div>
    </div>
  );
}
