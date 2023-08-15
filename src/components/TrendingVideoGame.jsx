export default function TrendingVideoGame({ game }) {
  return (
    <div className="flex flex-col relative">
      <img src={game.src} alt="giftcardIcon" />
      <p className="absolute lg:text-sm  md:right-4 sm:top-3 top-2 right-3  md:text-[13px] md:p-[4px] rounded-md bg-gray-50/25 sm:p-[3px] sm:text-[11px] p-[4px] text-[10px] shadow-2xl bg-gradient-to-b sm:text-xs text-white text-center">
        {game.offers} offers
      </p>
      <span className="text-black text-sm mt-2 font-medium w-full text-center">
        {game.title}
      </span>
    </div>
  );
}
