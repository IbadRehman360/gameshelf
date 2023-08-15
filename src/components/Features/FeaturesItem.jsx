import React from "react";

export default function FeaturesItem({ Details }) {
  const { icon, heading, description } = Details;
  return (
    <article className='relative mx-auto p-2 pb-8 flex flex-col items-center gap-2 leading-loose tracking-wider text-center  sm:border-gray-200 sm:border-r-[2px] sm:last-of-type:border-none sm:mb-0'>
      {icon}
      <h5 className='font-semibold text-xs lg:text-sm  2xl:text-lg'>
        {heading}
      </h5>
      <p className='text-gray-400 text-[0.65rem] lg:text-xs 2xl:text-sm font-extralight'>
        {description}
      </p>
      <div className='absolute mb-3 bottom-1 left-[35%%] h-[3px] w-[30%] bg-black sm:left-[40%] sm:w-[20%] sm:mb-1 sm:block' />
    </article>
  );
}
