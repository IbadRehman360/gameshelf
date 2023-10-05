import { useState } from "react";
import { AiFillCamera } from "react-icons/ai";

export default function ProfileInfoLoader() {
  const [showEditImage, setShowEditImage] = useState(false);
  return (
    <div className="md:order-3 lg:text-right">
      <div className="mt-16 text-center md:mt-0 lg:order-1">
        <div className="mb-4 flex w-full justify-center px-4 lg:order-2">
          <div className="relative">
            {showEditImage && (
              <button
                className="absolute bottom-1 left-1/2 z-50 translate-x-[-50%] translate-y-[-50%] md:top-1/4"
                onMouseEnter={() => setShowEditImage(true)}
                onMouseLeave={() => setShowEditImage(false)}
              >
                <AiFillCamera color="white" size="1.5rem" />
                <span className="text-xs text-white">Edit</span>
              </button>
            )}
            <div className="rounded-full">
              <div
                className={`mx-0 -mt-28 h-[7rem] w-[7rem] animate-pulse rounded-full border-none bg-slate-500 align-middle md:-mt-12 lg:-ml-0`}
              ></div>
            </div>
          </div>
        </div>
        <div className="mx-auto my-2 h-6 w-36 animate-pulse bg-slate-400"></div>
        <p className="mx-auto h-6 w-24 animate-pulse bg-slate-400"></p>
      </div>
      <div className="mt-5 flex justify-center gap-2 md:gap-1 lg:px-3">
        <button
          className="mb-1 rounded bg-red-500 px-6 py-2.5 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:bg-red-400 hover:shadow-md focus:outline-none active:bg-red-400 md:mr-2"
          type="button"
        >
          Connect
        </button>
        <button
          className="mb-1 rounded bg-gray-600 px-6 py-2.5 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:bg-gray-500 hover:shadow-md focus:outline-none active:bg-red-400"
          type="button"
        >
          Message
        </button>
      </div>
    </div>
  );
}
