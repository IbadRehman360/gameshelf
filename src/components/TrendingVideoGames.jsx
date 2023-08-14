import { useState } from "react";
import videoCardData from "../assets/giftcardsData/videocardData.json";
const TrendingVideoGames = () => {
  const [currentItem, setCurrentItem] = useState(4);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevPage = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextPage = () => {
    if (currentSlide < 2) setCurrentSlide(currentSlide + 1);
  };
  const handleNextItem = () => {
    setCurrentItem(currentItem + 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-5">
      <div className="flex items-center justify-between my-8">
        <h2 className="text-2xl font-bold">Trending Gift Cards</h2>
        <a
          href={`#video${currentItem}`}
          onClick={handleNextItem}
          className="sm:w-[46px] sm:h-[46px] w-[24px] h-[24px] border sm:rounded-xl rounded-full flex items-center justify-center cursor-pointer"
        >
          <img src="/public/cheronRight.svg" className="bg-white w-2" />
        </a>
      </div>
      <div className="overflow-hidden">
        <div
          className="carousel rounded-lg gap-x-4 transition-transform duration-500 ease-in-out flex whitespace-nowrap"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {videoCardData.map((item) => (
            <div
              key={item.id}
              id={`video${item.id}`}
              className="carousel-item w-[48%] sm:w-[23%] lg:w-[24%] flex flex-col relative"
            >
              <img src={item.src} alt="giftcardIcon" />
              <div className="absolute h-[20%] w-full rounded-xl opacity-30 shadow-2xl bg-gradient-to-b from-white  to-black "></div>
              <p className="absolute sm:max-lg:hidden  text-[14px] top-[4%] left-[50%] text-white -translate-x-[50%]">
                {item.title}
              </p>
              <span className="absolute sm:bottom-[6%] sm:right-[8%] bottom-9 right-3 text-white text-[12px]">
                {item.offers} offers
              </span>
              <span className="text-black text-sm mt-2  w-full text-center sm:hidden">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center ">
        <button
          onClick={handlePrevPage}
          className={`trending-page1 w-[25px] h-[3px] rounded-2xl mr-1 ${
            currentSlide === 0 ? "bg-[#f03827]" : "bg-[#888888]"
          } `}
          id="prevPage"
        />
        <button
          onClick={handleNextPage}
          className={`trending-page2 w-[25px] h-[3px] rounded-2xl ${
            currentSlide === 0 ? "bg-[#888888]" : "bg-[#f03827]"
          } `}
          id="nextPage"
        />
      </div>
    </div>
  );
};

export default TrendingVideoGames;
