import { useState } from "react";
const TrendingVideoGames = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselItemClass = "carousel-item w-[48%] sm:w-[24%] flex flex-col";
  const carouselSpanClass = "text-black mt-2 text-sm w-full text-center sm:hidden";
  const handlePrevPage = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextPage = () => {
    if (currentSlide < 2) setCurrentSlide(currentSlide + 1);
  };
  const handleNextItem = () => {};
  return (
    <div className="px-[10%]">
      <div className="flex items-center justify-between my-8">
        <h2 className="text-2xl font-bold">Trending Gift Cards</h2>
        <div className="sm:w-[46px] sm:h-[46px] w-[24px] h-[24px] border sm:rounded-xl rounded-full flex items-center justify-center">
          <img
            src="/public/cheronRight.svg"
            onClick={handleNextItem}
            className="bg-white w-2"
          />
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="carousel rounded-lg gap-x-4 transition-transform duration-500 ease-in-out flex whitespace-nowrap"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className={carouselItemClass}>
            <img src="/public/videogames/videogames1.svg" alt="giftcardIcon" />
            <span className={carouselSpanClass}>
              Assetto Corsa Steam CD Key
            </span>
          </div>

          <div className={carouselItemClass}>
            <img src="/public/videogames/videogames2.svg" alt="giftcardIcon" />
            <span className={carouselSpanClass}>WOW Prepaid Game Cards</span>
          </div>
          <div className={carouselItemClass}>
            <img src="/public/videogames/videogames3.svg" alt="giftcardIcon" />
            <span className={carouselSpanClass}>Satisfactory PC - Steam</span>
          </div>
          <div className={carouselItemClass}>
            <img src="/public/videogames/videogames4.svg" alt="giftcardIcon" />
            <span className={carouselSpanClass}>WOW Dragonflight</span>
          </div>
          <div className={carouselItemClass}>
            <img src="/public/videogames/videogames4.svg" alt="giftcardIcon" />
            <span className={carouselSpanClass}>WOW Dragonflight</span>
          </div>
          <div className={carouselItemClass}>
            <img src="/public/videogames/videogames2.svg" alt="giftcardIcon" />
            <span className={carouselSpanClass}>Dark Souls III PC - Steam</span>
          </div>
          <div className={carouselItemClass}>
            <img src="/public/videogames/videogames1.svg" alt="giftcardIcon" />
            <span className={carouselSpanClass}>
              Assetto Corsa Steam CD Key
            </span>
          </div>
          <div className={carouselItemClass}>
            <img src="/public/videogames/videogames3.svg" alt="giftcardIcon" />
            <span className={carouselSpanClass}>Satisfactory PC - Steam</span>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={handlePrevPage}
          className="trending-page1 w-[25px] h-[3px] rounded-2xl mr-1"
          id="prevPage"
        />
        <button
          onClick={handleNextPage}
          className="trending-page2 w-[25px] h-[3px] rounded-2xl "
          id="nextPage"
        />
      </div>
    </div>
  );
};

export default TrendingVideoGames;
