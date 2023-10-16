import { Link } from "react-router-dom";
import { decimalConversion } from "../utils/helpers";

export default function FeaturedProduct({
  title,
  created_at,
  price,
  level,
  fullName,
  games,
  productID,
  image,
}) {
  const date = new Date(created_at);

  const getHour = date.getHours(date);

  const convertedPrice = decimalConversion(price);
  return (
    <Link to={`/dashboard/${games}/${productID}`}>
      <div className="flex flex-col rounded-2xl border-2 bg-[#fdfdfd] p-3 lg:p-4">
        <div className="flex flex-col gap-1">
          <h3 className="my-1 line-clamp-2 text-[0.8rem] font-medium tracking-tighter text-black sm:text-xs lg:text-sm xl:text-[0.95rem]">
            {title}
          </h3>
        </div>
        <div className="mb-3 mt-2 flex justify-between sm:mb-4 lg:mt-4">
          <div className="h-fit rounded-lg bg-gray-200 p-0.5 px-1.5 text-[0.55rem] sm:px-2 sm:text-[0.7rem] lg:text-[0.8rem]">
            🕞 {getHour}H
          </div>

          <p className="-mt-0.5 text-[0.8rem] font-medium text-slate-600 sm:hidden sm:text-[0.8rem] md:text-[0.9rem] lg:text-[0.85rem] xl:text-[0.9rem]">
            {convertedPrice}
            <span className="ml-[3px] text-[0.6rem] font-normal text-gray-700 sm:text-[0.6rem] md:text-[0.6rem] xl:text-[0.6rem]">
              USD
            </span>
          </p>
        </div>
        <div className="border-t"></div>
        <div className="m-0 my-1 flex text-[0.4rem] sm:text-[0.7rem]">
          <div className="mt-1.5 h-9 w-9 rounded-full sm:h-9 sm:w-9 lg:h-10 lg:w-10">
            {image ? (
              <img src={image} alt="" className="h-full w-full rounded-full" />
            ) : (
              <div className="h-full w-full flex items-center  justify-center rounded-full bg-gray-300 text-white">
                {fullName && fullName[0]}
              </div>
            )}
          </div>

          <div className="ml-2 inline-flex flex-1 items-center justify-between">
            <div className="mt-1 md:mt-2 lg:mt-0.5">
              <h6 className="inline-flex truncate text-[11px] font-semibold text-gray-600 md:text-[10px] lg:text-[12px]">
                {fullName}
              </h6>
              <p className="text-[10px] -mt-0.5 tracking-wide text-gray-500 md:text-[10px] lg:text-[11px]">
                Level {level}
              </p>
            </div>
            <div className="mt-3">
              <p className="mb-2 hidden text-[1rem] font-medium text-slate-600 sm:flex sm:text-[0.8rem] md:text-[0.8rem] lg:text-[0.89rem] xl:text-[0.9rem]">
                {convertedPrice}
                <span className="ml-[1px] text-[0.5rem] font-medium text-gray-800 sm:ml-[4px] sm:mt-[4.5px] sm:text-[0.59rem] md:mt-[3px] md:text-[0.65rem] lg:ml-1 lg:mt-[4px] xl:mt-[3.4px] xl:text-[0.7rem]">
                  USD
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
