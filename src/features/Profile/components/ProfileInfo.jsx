import { useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ProfileInfo({ profileData }) {
  const [showEditImage, setShowEditImage] = useState(false);
  const user = profileData.data;

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
            <div className={`relative rounded-full`}>
              <img
                alt="..."
                src="/ProfileImg2.jpg"
                className={`mx-0 -mt-28 h-auto max-w-[7rem] rounded-full border-none align-middle shadow-xl md:-mt-12 lg:-ml-0`}
                onMouseEnter={() => setShowEditImage(true)}
                onMouseLeave={() => setShowEditImage(false)}
              />
              <div
                className={`${
                  showEditImage ? "z-30 block bg-black opacity-30" : "hidden"
                } absolute mx-0 -mt-28 h-full w-full max-w-[7rem] rounded-full border-none align-middle md:top-1/2 md:-mt-12 md:translate-y-[-7%] lg:-ml-0`}
                onMouseEnter={() => setShowEditImage(true)}
                onMouseLeave={() => setShowEditImage(false)}
              ></div>
            </div>
          </div>
        </div>
        <h3 className="text-[1.15rem] sm:text-[1.2rem] 2xl:text-[1.3rem] font-medium 3xl:text-[1.35rem]">
          {user.first_name} {""}
          {user.last_name}
        </h3>
        <p className="mt-0.5 text-[0.8rem] uppercase">Level {user.level}</p>
      </div>
      <div className="mt-5 flex justify-center gap-2 md:gap-1 lg:px-3">
        <button
          className="mb-1 rounded bg-red-500 px-6 py-2.5 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:bg-red-400 hover:shadow-md focus:outline-none active:bg-red-400 md:mr-2"
          type="button"
        >
          Connect
        </button>
        <Link
          className="mb-1 rounded bg-gray-600 px-6 py-2.5 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:bg-gray-500 hover:shadow-md focus:outline-none active:bg-red-400"
          type="button"
          to={`/chat/new/${profileData.id}`}
        >
          Message
        </Link>
      </div>
    </div>
  );
}
