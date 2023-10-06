import FeaturedProductLoading from "./FeaturedProductLoading";

export default function ProfileProductLoader() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-5 pb-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:gap-4 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
      {Array.from({ length: 8 }, (i) => (
        <FeaturedProductLoading key={i} />
      ))}
    </div>
  );
}
