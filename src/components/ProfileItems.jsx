import FeaturedProduct from "./FeaturedProduct";

export default function ProfileItems() {
  return (
    <div className="p-4">
        <h1 className="text-xl font-bold">Featured Items</h1>
        <div className="grid gap-4 mt-4">
            {Array.from({length: 5}, (index, item) => (
                <FeaturedProduct key={index}/>
            ))}
        </div>
    </div>
  )
}
