import FeaturedProduct from "./FeatureProduct";

export default function ProfileItems() {
  return (
    <div className="p-4 w-full ml-10">
      <h1 className=" pb-10 pt-10 font-bold  text-3xl  ">Featured Items</h1>
      <div className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {Array.from({ length: 14 }, (index) => (
          <FeaturedProduct key={index} />
        ))}
      </div>
    </div>
  );
}
