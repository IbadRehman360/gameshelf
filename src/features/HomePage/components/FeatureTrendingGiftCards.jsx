import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import TrendingGiftCard from "./TrendingGiftCard";
import giftCardData from "../../../assets/giftcardsData/giftcardData.json";

import { Link } from "react-router-dom";
const TrendingGiftCards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevPage = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextPage = () => {
    if (currentSlide < 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const visibleData = giftCardData.slice(
    currentSlide * 4,
    (currentSlide + 1) * 4
  );
  return (
    <div className="mt-8 bg-[#fdfdfd]">
      <div className="my-8 mr-2 flex items-center justify-between">
        <h2 className="ml-2 text-[1.4rem] font-semibold text-gray-700 md:text-[1.7rem] lg:text-[1.8rem] 3xl:text-[2rem]">
          Trending Gift Cards
        </h2>
        <Link to={"/dashboard"}>
          <div className="hidden items-center gap-2 sm:flex">
            <span>Discover All</span>
            <div className="rounded-full border-[1px] border-black bg-white p-1 shadow-sm">
              <a onClick={handleNextPage} href="#" className="">
                <MdKeyboardArrowRight />
              </a>
            </div>
          </div>
        </Link>

        <div className="sm:hidden">
          {currentSlide < 1 && (
            <div className="rounded-full border-[1px] border-black bg-white p-1 shadow-sm">
              <a
                onClick={handleNextPage}
                href="#mbTrendingGiftCardsSlide2"
                className=""
              >
                <MdKeyboardArrowRight />
              </a>
            </div>
          )}
          {currentSlide > 0 && (
            <div className="rounded-full border-[1px] border-black bg-white p-1 shadow-sm">
              <a
                onClick={handlePrevPage}
                href="#mbTrendingGiftCardsSlide1"
                className=""
              >
                <MdKeyboardArrowLeft />
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="carousel-center   hidden w-full gap-x-4 rounded-lg sm:carousel">
        <div
          id="trendingGiftCardsSlide1"
          className="carousel-item   w-full gap-2  xl:gap-4"
        >
          {visibleData.slice(0, 4).map((giftCard) => (
            <TrendingGiftCard key={giftCard.id} giftCard={giftCard} />
          ))}
        </div>
        <div
          id="trendingGiftCardsSlide2"
          className="carousel-item w-full gap-4 sm:gap-5 lg:gap-8"
        >
          {visibleData.slice(0, 4).map((giftCard) => (
            <TrendingGiftCard key={giftCard.id} giftCard={giftCard} />
          ))}
        </div>
      </div>

      <div className="carousel relative w-full gap-x-4 rounded-lg sm:hidden">
        <div
          id="mbTrendingGiftCardsSlide1"
          className="carousel-item w-full gap-1  sm:gap-5 md:gap-10"
        >
          {giftCardData.slice(0, 2).map((giftCard) => (
            <TrendingGiftCard key={giftCard.id} giftCard={giftCard} />
          ))}
        </div>
        <div
          id="mbTrendingGiftCardsSlide2"
          className="carousel-item w-full gap-1 sm:gap-5 md:gap-10"
        >
          {giftCardData.slice(2, 4).map((giftCard) => (
            <TrendingGiftCard key={giftCard.id} giftCard={giftCard} />
          ))}
        </div>
      </div>

      <div className="mt-2 flex justify-center text-xs sm:mt-4 md:mt-6">
        <p
          className="text-[0.97rem] sm:text-[1rem] md:hidden"
          style={{ letterSpacing: "0.1em" }}
        >
          {currentSlide < 1 ? "1/2" : "2/2"}
        </p>
        <div className="hidden justify-center md:flex">
          <a
            href="#trendingGiftCardsSlide1"
            onClick={handlePrevPage}
            className={`mr-1 block h-[4px] w-[28px] rounded-2xl ${
              currentSlide === 0 ? "bg-[#f03827]" : "bg-[#888888]"
            } `}
            id="prevPage"
          />
          <a
            href="#trendingGiftCardsSlide2"
            onClick={handleNextPage}
            className={`mr-1 block h-[4px] w-[28px] rounded-2xl ${
              currentSlide === 1 ? "bg-[#f03827]" : "bg-[#888888]"
            } `}
          />
        </div>
      </div>
    </div>
  );
};

{
  /* 

   {giftCardData.map((item) => (
            <div
              key={item.id}
              id={`video${item.id}`}
              className="carousel-item w-[48%] sm:w-[23%] lg:w-[16%] flex flex-col relative"
            >
              <div className="relative">
                <img src={item.src} alt="giftcardIcon" />
                <p className="absolute lg:text-sm md:right-4 sm:top-3 top-2 right-3 md:text-[13px] md:p-[4px] rounded-md bg-gray-50/25 sm:p-[3px] sm:text-[11px] p-[4px] text-[10px] shadow-2xl bg-gradient-to-b sm:text-xs text-white text-center">
                  {item.offers} offers
                </p>
              </div>
              <span className="text-black text-sm mt-2 font-medium w-full text-center">
                {item.title}
              </span>
            </div>
          ))}

*/
}

export default TrendingGiftCards;
