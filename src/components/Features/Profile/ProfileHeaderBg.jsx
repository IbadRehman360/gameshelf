import React, { useState } from "react";
import { HiUpload } from "react-icons/hi";
import { BsCardImage } from "react-icons/bs";

export default function ProfileHeaderBg() {
  const [showImageEditBtn, setShowImageEditBtn] = useState(false);

  return (
    <section className="relative">
      {showImageEditBtn && (
        <div className="absolute z-50 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] ">
          <button className="p-4 bg-slate-500 rounded-xl flex flex-col gap-2"
           onMouseEnter={(e) => setShowImageEditBtn(true)}
           onMouseLeave={(e) => setShowImageEditBtn(false)}
          >
            <BsCardImage className="w-full" color="white" size="1.3rem" />
            <span className="text-white text-xs">Edit Image</span>
          </button>
        </div>
      )}
      <div
        className={`w-full ${showImageEditBtn && "opacity-70"} hover:opacity-70 object-cover h-[240px] bg-center bg-cover bg-no-repeat sm:bg-cover`}
        style={{ backgroundImage: 'url("/ProfileBanner.png")' }}
        onMouseEnter={(e) => setShowImageEditBtn(true)}
        onMouseLeave={(e) => setShowImageEditBtn(false)}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-5 bg-black"
        ></span>
      </div>

      <div
        className="top-auto bottom-0  left-0 right-0 w-full absolute pointer-events-none overflow-hidden "
        style={{ transform: "translateZ(0px)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-blueGray-200 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </section>
  );
}
