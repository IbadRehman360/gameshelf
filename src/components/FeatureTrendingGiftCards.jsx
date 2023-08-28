import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import giftCardData from "../assets/giftcardsData/giftcardData.json";
import TrendingGiftCard from "./Features/HomePage/TrendingGiftCard";

const TrendingGiftCards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevPage = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextPage = () => {
    if (currentSlide < 2) setCurrentSlide(currentSlide + 1);
  };

  return (
    <div className=" mt-8 mb-10 bg-[#fdfdfd] ">
      <div className="flex items-center justify-between mr-2  my-8">
        <h2 className=" lg:text-[1.8rem]  text-gray-700 3xl:text-[2rem]  md:text-[1.7rem] text-[1.4rem]  ml-2 font-semibold">
          Trending Gift Cards
        </h2>
        <div className="hidden sm:flex items-center gap-2">
          <span>Discover All</span>
          <div className="bg-white p-1 rounded-full shadow-sm border-[1px] border-black">
            <a onClick={handleNextPage} href="#" className="">
              <MdKeyboardArrowRight />
            </a>
          </div>
        </div>
        <div className="sm:hidden">
          {currentSlide < 1 && (
            <div className="bg-white rounded-full shadow-sm border-[1px] border-black">
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
            <div className="bg-white rounded-full shadow-sm border-[1px] border-black">
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

      <div className="hidden sm:carousel carousel-center w-full rounded-lg gap-x-4">
        <div
          id="trendingGiftCardsSlide1"
          className="carousel-item w-full gap-2 xl:gap-4 "
        >
          {giftCardData.slice(0, 4).map((giftCard) => (
            <TrendingGiftCard key={giftCard.id} giftCard={giftCard} />
          ))}
        </div>
        <div
          id="trendingGiftCardsSlide2"
          className="carousel-item w-full gap-4 sm:gap-5 lg:gap-8"
        >
          {giftCardData.slice(0, 4).map((giftCard) => (
            <TrendingGiftCard key={giftCard.id} giftCard={giftCard} />
          ))}
        </div>
      </div>

      <div className="relative sm:hidden carousel w-full rounded-lg gap-x-4">
        <div
          id="mbTrendingGiftCardsSlide1"
          className="carousel-item w-full gap-2 sm:gap-5 md:gap-10"
        >
          {giftCardData.slice(0, 2).map((giftCard) => (
            <TrendingGiftCard key={giftCard.id} giftCard={giftCard} />
          ))}
        </div>
        <div
          id="mbTrendingGiftCardsSlide2"
          className="carousel-item w-full gap-4 sm:gap-5 md:gap-10"
        >
          {giftCardData.slice(2, 4).map((giftCard) => (
            <TrendingGiftCard key={giftCard.id} giftCard={giftCard} />
          ))}
        </div>
      </div>

      <div className="flex justify-center text-xs mt-2 md:mt-6 sm:mt-4">
        <p
          className="md:hidden  text-[0.97rem] sm:text-[1rem] "
          style={{ letterSpacing: "0.1em" }}
        >
          {currentSlide < 1 ? "1/2" : "2/2"}
        </p>
        <div className="hidden md:flex justify-center">
          <a
            href="#trendingGiftCardsSlide1"
            onClick={handlePrevPage}
            className={`block w-[28px] h-[4px] rounded-2xl mr-1 ${
              currentSlide === 0 ? "bg-[#f03827]" : "bg-[#888888]"
            } `}
            id="prevPage"
          />
          <a
            href="#trendingGiftCardsSlide2"
            onClick={handleNextPage}
            className={`block w-[28px] h-[4px] rounded-2xl mr-1 ${
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
                <p className="absolute lg:text-sm  md:right-4 sm:top-3 top-2 right-3  md:text-[13px] md:p-[4px] rounded-md bg-gray-50/25 sm:p-[3px] sm:text-[11px] p-[4px] text-[10px] shadow-2xl bg-gradient-to-b sm:text-xs text-white text-center">
                  {item.offers} offers
                </p>
              </div>
              <span className="text-black  text-sm mt-2  font-medium w-full text-center">
                {item.title}
              </span>
            </div>
          ))}

*/
}

export default TrendingGiftCards;
