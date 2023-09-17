import { Link } from "react-router-dom";

export default function TrendingVideoGame({ game }) {
  return (
    <Link>
      <div className="relative flex flex-col bg-[#fdfdfd] px-1 sm:px-1 md:p-1 lg:p-4">
        <img src={game.src} alt="giftcardIcon" />
        <p className="absolute right-3 top-2 rounded-md bg-gray-50/25 bg-gradient-to-b p-[4px] text-center text-[10px] text-white shadow-2xl sm:top-3 sm:p-[3px] sm:text-[11px] md:right-4 md:p-[4px] md:text-[13px] lg:right-7 lg:top-7 lg:p-[6px] lg:text-[0.8erm]">
          {game.offers} offers
        </p>
        <span className="mt-2 w-full text-center text-[13px] font-medium text-black sm:text-sm">
          {game.title}
        </span>
      </div>
    </Link>
  )
}
