export default function TrendingGiftCard({ giftCard }) {
  return (
    <div
      className="flex flex-col  px-1 sm:px-1 relative lg:p-4 md:p-1 "
      style={{ backgroundColor: "#FCFCFC " }}
    >
      <img src={giftCard.src} alt="giftcardIcon" />
      <p className="absolute lg:text-[0.8erm] md:top-4   md:right-4 sm:top-3 top-2 right-3 lg:top-7 lg:right-7 md:text-[13px]  lg:p-[6px] md:p-[4px] rounded-md bg-gray-50/25 sm:p-[3px] sm:text-[11px] p-[4px] text-[10px] shadow-2xl bg-gradient-to-b sm:text-xs text-white text-center">
        {giftCard.offers} offers
      </p>
      <span className="text-black  text-[13px] sm:text-sm mt-2  font-medium w-full text-center">
        {giftCard.title}
      </span>
    </div>
  );
}
