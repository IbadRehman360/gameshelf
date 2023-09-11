import FeaturedProduct from "../../components/FeatureProduct";

export default function dashboardItems() {
  return (
    <div className="grid grid-cols-1 pb-8 gap-5 mt-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  3xl:grid-cols-5  lg:gap-4">
      {Array.from({ length: 8 }, (item, i) => (
        <FeaturedProduct key={i} />
      ))}
    </div>
  );
}
