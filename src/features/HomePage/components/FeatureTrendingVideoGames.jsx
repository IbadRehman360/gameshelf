import { useState } from "react";
import videoCardData from "../../../assets/giftCardsData/videocardData.json";
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
    <div className=" mt-8 mb-12 bg-[#fdfdfd] ">
      <div className="flex items-center justify-between mr-2  my-8">
        <h2 className=" lg:text-[1.8rem]  text-gray-700 3xl:text-[2rem]  md:text-[1.7rem] text-[1.4rem]  ml-2 font-semibold">
          Trending Video Games
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
          className="carousel-item w-full gap-2 xl:gap-4 "
        >
          {videoCardData.slice(0, 4).map((game) => (
            <TrendingVideoGame key={game.id} game={game} />
          ))}
        </div>
        <div
          id="trendingVideoGamesSlide2"
          className="carousel-item w-full gap-4 sm:gap-5 lg:gap-8"
        >
          {videoCardData.slice(0, 4).map((game) => (
            <TrendingVideoGame key={game.id} game={game} />
          ))}
        </div>
      </div>

      <div className="relative sm:hidden carousel w-full rounded-lg gap-x-4">
        <div
          id="mbTrendingVideoGamesSlide1"
          className="carousel-item w-full gap-2 sm:gap-5 md:gap-10"
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
      <div className="flex justify-center text-xs mt-2 md:mt-6 sm:mt-4">
        <p
          className="md:hidden  text-[0.97rem] sm:text-[1rem] "
          style={{ letterSpacing: "0.1em" }}
        >
          {currentSlide < 1 ? "1/2" : "2/2"}
        </p>
        <div className="hidden md:flex justify-center">
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
