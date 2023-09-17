export default function ProfileHeaderBg() {

  return (
    <section className="relative animate-pulse">
      <div
        className="h-[240px] bg-slate-400 bg-cover bg-center bg-no-repeat object-cover hover:opacity-70 sm:bg-cover"
      >
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
