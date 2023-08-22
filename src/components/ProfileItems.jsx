import FeaturedProduct from "./FeaturedProduct";

export default function ProfileItems() {
  return (
    <div className="p-4 w-full">
        <h1 className="text-xl font-bold">Featured Items</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {Array.from({length: 5}, (index) => (
                <FeaturedProduct key={index}/>
            ))}
        </div>
    </div>
  )
}
