import React from "react";

export default function ProfileHeaderBg() {
  return (
    <section>
      <div
        className="w-full object-cover h-[240px] bg-center bg-cover bg-no-repeat sm:bg-cover "
        style={{ backgroundImage: 'url("/ProfileBanner.png")' }}
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
