import { useState } from "react";
import videoCardData from "../assets/giftCardsData/videocardData.json";
import TrendingVideoGame from "./TrendingVideoGame";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const TrendingVideoGames = () => {
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
    <div className="max-w-7xl mx-auto px-5 mt-12 mb-10">
      <div className="flex items-center justify-between my-8">
        <h2 className=" lg:text-[1.8rem] text-[1.4rem]    font-semibold">
          Trending Gift Cards
        </h2>
        <div className="hidden sm:flex items-center gap-2">
          <span>Discover</span>
          <div className="bg-white p-1 rounded-full shadow-sm border-[1px] border-black">
            <a
              onClick={handleNextPage}
              href="#"
              className=""
            >
              <MdKeyboardArrowRight />
            </a>
          </div>
        </div>

        <div className="sm:hidden">
          {currentSlide < 1 && (
            <div className="bg-white rounded-full shadow-sm border-[1px] border-black">
              <a
                onClick={handleNextPage}
                href="#mbTrendingVideoGamesSlide2"
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
                href="#mbTrendingVideoGamesSlide1"
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
          id="trendingVideoGamesSlide1"
          className="carousel-item w-full gap-4 sm:gap-5 md:gap-10"
        >
          {videoCardData.slice(0, 4).map((game) => (
            <TrendingVideoGame key={game.id} game={game} />
          ))}
        </div>
        <div
          id="trendingVideoGamesSlide2"
          className="carousel-item w-full gap-4 sm:gap-5 md:gap-10"
        >
          {videoCardData.slice(0, 4).map((game) => (
            <TrendingVideoGame key={game.id} game={game} />
          ))}
        </div>
      </div>

      <div className="relative sm:hidden carousel w-full rounded-lg gap-x-4">
        <div
          id="mbTrendingVideoGamesSlide1"
          className="carousel-item w-full gap-4 sm:gap-5 md:gap-10"
        >
          {videoCardData.slice(0, 2).map((game) => (
            <TrendingVideoGame key={game.id} game={game} />
          ))}
        </div>
        <div
          id="mbTrendingVideoGamesSlide2"
          className="carousel-item w-full gap-4 sm:gap-5 md:gap-10"
        >
          {videoCardData.slice(2, 4).map((game) => (
            <TrendingVideoGame key={game.id} game={game} />
          ))}
        </div>
      </div>

      <div className="flex justify-center text-xs mt-1">
        <p className="sm:hidden">{currentSlide < 1 ? "1/2" : "2/2"}</p>
        <div className="hidden sm:flex justify-center">
          <a
            href="#trendingVideoGamesSlide1"
            onClick={handlePrevPage}
            className={`block w-[28px] h-[4px] rounded-2xl mr-1 ${
              currentSlide === 0 ? "bg-[#f03827]" : "bg-[#888888]"
            } `}
            id="prevPage"
          />
          <a
            href="#trendingVideoGamesSlide2"
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

export default TrendingVideoGames;
