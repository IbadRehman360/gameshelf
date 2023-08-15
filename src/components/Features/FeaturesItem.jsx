export default function FeaturesItem({ Details }) {
  const { icon, heading, description } = Details;
  return (
    <article className="relative mx-auto p-4 pb-8 flex flex-col items-center gap-2 sm:leading-loose tracking-wider text-center  sm:border-gray-200 sm:border-r-[2px] sm:last-of-type:border-none sm:mb-0">
      {icon}
      <h5 className="font-semibold text-xs lg:text-sm  2xl:text-lg">
        {heading}
      </h5>
      <p className="text-gray-400 3xl:mx-24 2xl:mx-16 text-[0.7rem] mx-0 md:mx-1 sm:text-[0.7rem] lg:text-sm lg:mx-8 2xl:text-sm font-extralight">
        {description}
      </p>
      <div className="absolute mb-3 bottom-1 left-[42%] h-[3px] w-[20%] bg-black sm:left-[40%] sm:w-[20%] lg:mb-0 sm:mb-2 sm:block" />
    </article>
  );
}
