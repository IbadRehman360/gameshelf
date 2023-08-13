const cards = [
  { name: "Games Top Up", color: "bg-[#6fb935]" },
  { name: "Gift Cards", color: "bg-[#2ebdb5]" },
  { name: "Video Games", color: "bg-[#39bbd8]" },
  { name: "Software", color: "bg-[#f68500]" },
  { name: "Game Coins", color: "bg-[#f05f81]" },
  { name: "Items", color: "bg-[#7774ff]" },
  { name: "Accounts", color: "bg-[#3092eb]" },
  { name: "Coaching", color: "bg-[#ffc600]" },
];

export default function HomePageNavigationBar() {
  return (
    <div className="mx-auto bg-gradient-to-b from-navy-blue to-[#242633e3]">
      <div className=" max-w-7xl grid mx-auto   gap-10 grid-cols-4 md:grid-cols-8 md:gap-5 lg:gap-2 xl:gap-0 justify-items-center p-5 pb-10">
        {cards.map((card, i) => (
          <div
            key={i}
            className="text-center h-14 w-14 md:h-16 md:w-16 xl:h-24 xl:w-20 flex flex-col items-center gap-2"
          >
            <div
              className={`${card.color} p-4 xl:p-5 rounded-xl xl:rounded-3xl`}
            >
              <img
                className="transition md:hover:scale-125"
                src={`/HomePageNavigationBarImages/Navigation${i + 1}.webp`}
              />
            </div>
            <p className="text-[11px] sm:text-[11px] md:text-xs font-medium text-white whitespace-nowrap">
              {card.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
