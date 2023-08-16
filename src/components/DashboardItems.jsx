import FeaturedProduct from "./FeaturedProduct";

export default function dashboardItems() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
      {Array.from({ length: 20 }, (item, i) => (
        <FeaturedProduct key={i}/>
      ))}
    </div>
  );
}
