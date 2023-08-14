import { useState } from "react";
const TrendingGiftCard = () => {
  const [currentItem, setCurrentItem] = useState(4);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselItemClass = "carousel-item w-[48%] sm:w-[24%] flex flex-col";
  const carouselSpanClass =
    "text-black text-sm mt-2  w-full text-center sm:hidden";
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
    <div className="px-[10%]">
      <div className="flex items-center justify-between my-8">
        <h2 className="text-2xl font-bold">Trending Gift Cards</h2>
        <a
          href={`#slide${currentItem}`}
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
          <div id="slide1" className={carouselItemClass}>
            <img src="/public/giftcards/giftcard1.svg" alt="giftcardIcon" />
            <span className={carouselSpanClass}>Stem Wallet</span>
          </div>

          <div id="slide2" className={carouselItemClass}>
            <img src="/public/giftcards/giftcard2.svg" alt="giftcardIcon" />
            <span className={carouselSpanClass}>Apple Itunes</span>
          </div>
          <div id="slide3" className={carouselItemClass}>
            <img src="/public/giftcards/giftcard3.svg" alt="giftcardIcon" />
            <span className={carouselSpanClass}>Razor Gold</span>
          </div>
          <div id="slide4" className={carouselItemClass}>
            <img src="/public/giftcards/giftcard4.svg" alt="giftcardIcon" />
            <span className={carouselSpanClass}>Game Pass</span>
          </div>
          <div id="slide5" className={carouselItemClass}>
            <img src="/public/giftcards/giftcard1.svg" alt="giftcardIcon" />
            <span className={carouselSpanClass}>Stem Wallet</span>
          </div>
          <div id="slide6" className={carouselItemClass}>
            <img src="/public/giftcards/giftcard2.svg" alt="giftcardIcon" />
            <span className={carouselSpanClass}>Apple Itunes</span>
          </div>
          <div id="slide7" className={carouselItemClass}>
            <img src="/public/giftcards/giftcard3.svg" alt="giftcardIcon" />
            <span className={carouselSpanClass}>Razor Gold</span>
          </div>
          <div id="slide8" className={carouselItemClass}>
            <img src="/public/giftcards/giftcard4.svg" alt="giftcardIcon" />
            <span className={carouselSpanClass}>Game Pass</span>
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

export default TrendingGiftCard;
