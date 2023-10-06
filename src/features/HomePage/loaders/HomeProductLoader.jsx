import HomeProductLoaders from "./HomeProductLoaders"; // Import your HomeProductLoaders component

function ProfileProductLoading() {
  return (
    <div className="mb-16 bg-[#fdfdfd] px-3">
      <div className="mt-2 w-full justify-items-stretch sm:mt-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-5">
        <div className="mx-auto my-4 w-full gap-2 sm:w-full md:gap-3">
          {Array.from({ length: 4 }, (i) => (
            <FeaturedProductLoading key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileProductLoading;
