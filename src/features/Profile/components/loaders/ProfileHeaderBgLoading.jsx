export default function ProfileHeaderBg() {

  return (
    <section className="relative animate-pulse">
      <div
        className="bg-slate-400 hover:opacity-70 object-cover h-[240px] bg-center bg-cover bg-no-repeat sm:bg-cover"
      >
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
