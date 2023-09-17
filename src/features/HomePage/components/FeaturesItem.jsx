export default function FeaturesItem({ Details }) {
  const { icon, heading, description } = Details;
  return (
    <article className="relative mx-auto flex flex-col items-center gap-2 bg-[#fdfdfd] p-4 pb-8 text-center tracking-wider sm:mb-0 sm:leading-loose sm:last-of-type:border-none md:border-r-[2px]">
      {icon}
      <h5 className="text-xs font-semibold lg:text-sm 2xl:text-lg">
        {heading}
      </h5>
      <p className="mx-0 text-[0.7rem] font-extralight text-gray-400 sm:text-[0.7rem] md:mx-1 lg:mx-8 lg:text-sm 2xl:mx-16 2xl:text-sm 3xl:mx-24">
        {description}
      </p>
      <div className="absolute bottom-1 left-[42%] mb-3 h-[3px] w-[20%] bg-black sm:left-[40%] sm:mb-2 sm:block sm:w-[20%] lg:mb-0" />
    </article>
  );
}
