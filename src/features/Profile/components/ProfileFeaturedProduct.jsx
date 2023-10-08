import { Link } from "react-router-dom";

export default function FeaturedProduct({ featureProduct, profileData }) {
  const date = new Date(featureProduct.created_at);
  const getHour = date.getHours(date);
  const decimalConversion = featureProduct.price.toFixed(2);

  return (
    <Link to={`/dashboard/csgo/${featureProduct.id}`}>
      <div className="flex flex-col rounded-2xl border-2 bg-[#fdfdfd] p-3 ">
        <div className="flex flex-col gap-1">
          <h3 className="my-1 line-clamp-2 text-[0.8rem] font-medium tracking-tighter text-black sm:text-xs lg:text-sm xl:text-[0.95rem]">
            {featureProduct.title}
          </h3>
        </div>
        <div className="mb-3 mt-2 flex justify-between sm:mb-4 lg:mt-4">
          <div className="h-fit rounded-lg bg-gray-200 p-0.5 px-1.5 text-[0.55rem] sm:px-2 sm:text-[0.7rem] lg:text-[0.8rem]">
            🕞 {getHour}H
          </div>

          <p className="-mt-0.5 text-[0.85rem] font-medium text-slate-800 sm:hidden sm:text-[0.8rem] md:text-[0.9rem] lg:text-[0.85rem] xl:text-[0.9rem]">
            {decimalConversion}
            <span className="ml-[3px] text-[0.6rem] font-normal text-gray-700 sm:text-[0.6rem] md:text-[0.6rem] xl:text-[0.6rem]">
              USD
            </span>
          </p>
        </div>
        <div className="border-t"></div>
        <div className="m-1 flex text-[0.4rem] sm:text-[0.7rem]">
          <div className="mt-1.5 h-8 w-8 rounded-full sm:h-8 sm:w-8 lg:h-9 lg:w-9 ">
            {profileData.data.avatar_image ? (
              <img
                src={profileData.data.avatar_image}
                alt=""
                className="h-full w-full rounded-full"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center rounded-full bg-gray-300 text-white">
                {profileData.data.username[0]}
              </div>
            )}
          </div>

          <div className="ml-2 inline-flex flex-1 items-center justify-between">
            <div className="mt-1 md:mt-2 lg:mt-0.5">
              <h6 className="inline-flex  truncate text-[11px] font-semibold tracking-wide text-gray-700 md:text-[10px] lg:text-[11.8px]">
                {profileData.data.username}
              </h6>
              <p className="text-[10px]  -m-0.5 ml-[0.5px] tracking-wide text-gray-500 md:text-[10px] lg:text-[10px]">
                Level {profileData.data.level}
              </p>
            </div>
            <div className="mt-3">
              <p className="mb-2 hidden text-[1rem] font-medium text-slate-600 sm:flex sm:text-[0.85rem] md:text-[0.85rem] lg:text-[0.94rem] xl:text-[0.92rem]">
                {decimalConversion}
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
