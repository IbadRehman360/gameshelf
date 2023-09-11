function LoadingAnimation() {
  return (
    <di className="animate-pulse flex flex-col items-center gap-2">
      <div className="rounded-2xl bg-slate-400 h-12 w-11 lg:h-16 md:w-16 "></div>
      <div className="h-2 bg-slate-400 rounded col-span-2 w-full"></div>
    </di>
  );
}

export default LoadingAnimation;
