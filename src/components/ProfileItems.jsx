import FeaturedProduct from "./FeatureProduct";

export default function ProfileItems() {
  return (
    <div className="ml-10 w-full p-4">
      <h1 className="py-10 text-3xl font-bold">Featured Items</h1>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 14 }, (index) => (
          <FeaturedProduct key={index} />
        ))}
      </div>
    </div>
  );
}
