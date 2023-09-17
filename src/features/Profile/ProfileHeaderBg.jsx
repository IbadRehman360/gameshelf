import { useState } from "react";
import { BsCardImage } from "react-icons/bs";

export default function ProfileHeaderBg() {
  const [showImageEditBtn, setShowImageEditBtn] = useState(false);

  return (
    <section className="relative">
      {showImageEditBtn && (
        <div className="absolute left-1/2 top-20 z-50 translate-x-[-50%] translate-y-[-50%] md:top-24">
          <button
            className="flex flex-col gap-2 rounded-xl bg-slate-400 p-2 md:p-2 xl:p-3"
            onMouseEnter={() => setShowImageEditBtn(true)}
            onMouseLeave={() => setShowImageEditBtn(false)}
          >
            <BsCardImage className="w-full" color="white" size="1.3rem" />
            <span className="text-[0.6rem] font-medium tracking-tight text-white sm:text-[0.7rem] xl:text-[0.8rem]">
              Edit Image
            </span>
          </button>
        </div>
      )}
      <div
        className={`w-full ${
          showImageEditBtn && "opacity-70"
        } h-[240px] bg-cover bg-center bg-no-repeat object-cover hover:opacity-70 sm:bg-cover`}
        style={{ backgroundImage: 'url("/ProfileBanner.png")' }}
        onMouseEnter={() => setShowImageEditBtn(true)}
        onMouseLeave={() => setShowImageEditBtn(false)}
      >
        <span
          id="blackOverlay"
          className="absolute h-full w-full bg-black opacity-5"
        ></span>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-auto w-full overflow-hidden"
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
            className="fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </section>
  );
}
