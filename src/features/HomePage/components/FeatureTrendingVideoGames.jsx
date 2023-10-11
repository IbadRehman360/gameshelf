import { useState } from "react";
import videoCardData from "../../../assets/giftcardsData/videocardData.json";
import TrendingVideoGame from "./TrendingVideoGame";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
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
    <div className="mb-12 mt-8 bg-[#fdfdfd]">
      <div className="my-8 mr-2 flex items-center justify-between">
        <h2 className="ml-2 text-[1.4rem] font-semibold text-gray-700 md:text-[1.7rem] lg:text-[1.8rem] 3xl:text-[2rem]">
          Trending Video Games
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
                href="#mbTrendingVideoGamesSlide2"
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
                href="#mbTrendingVideoGamesSlide1"
                className=""
              >
                <MdKeyboardArrowLeft />
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="carousel-center hidden w-full gap-x-4 rounded-lg sm:carousel">
        <div
          id="trendingVideoGamesSlide1"
          className="carousel-item w-full gap-2 xl:gap-4"
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

      <div className="carousel relative w-full gap-x-4 rounded-lg sm:hidden">
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
      <div className="mt-2 flex justify-center text-xs sm:mt-4 md:mt-6">
        <p
          className="text-[0.97rem] sm:text-[1rem] md:hidden"
          style={{ letterSpacing: "0.1em" }}
        >
          {currentSlide < 1 ? "1/2" : "2/2"}
        </p>
        <div className="hidden justify-center md:flex">
          <a
            href="#trendingVideoGamesSlide1"
            onClick={handlePrevPage}
            className={`mr-1 block h-[4px] w-[28px] rounded-2xl ${
              currentSlide === 0 ? "bg-[#f03827]" : "bg-[#888888]"
            } `}
            id="prevPage"
          />
          <a
            href="#trendingVideoGamesSlide2"
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

export default TrendingVideoGames;
