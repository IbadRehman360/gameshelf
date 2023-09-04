import { useState } from "react";
import { BsCardImage } from "react-icons/bs";

export default function ProfileHeaderBg() {
  const [showImageEditBtn, setShowImageEditBtn] = useState(false);

  return (
    <section className="relative">
      {showImageEditBtn && (
        <div className="absolute z-50  md:top-24 top-20 left-1/2 translate-x-[-50%] translate-y-[-50%] ">
          <button
            className="md:p-2 p-2 xl:p-3 bg-slate-400  rounded-xl flex flex-col gap-2"
            onMouseEnter={() => setShowImageEditBtn(true)}
            onMouseLeave={() => setShowImageEditBtn(false)}
          >
            <BsCardImage className="w-full" color="white" size="1.3rem" />
            <span className="text-white   font-medium text-[0.6rem] xl:text-[0.8rem] tracking-tight sm:text-[0.7rem] ">
              Edit Image
            </span>
          </button>
        </div>
      )}
      <div
        className={`w-full ${
          showImageEditBtn && "opacity-70"
        } hover:opacity-70 object-cover h-[240px] bg-center bg-cover bg-no-repeat sm:bg-cover`}
        style={{ backgroundImage: 'url("/ProfileBanner.png")' }}
        onMouseEnter={() => setShowImageEditBtn(true)}
        onMouseLeave={() => setShowImageEditBtn(false)}
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
