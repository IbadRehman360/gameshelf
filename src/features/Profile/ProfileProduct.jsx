import FeaturedProduct from "./ProfileFeaturedProduct";

export default function DashboardItems({ profileData }) {
  console.log(profileData)

  if (!Array.isArray(profileData.items)) {
    return <div>No items to display</div>;
  }
  return (
    <div className="grid grid-cols-1 pb-8 gap-5 mt-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 lg:gap-4">
      {profileData.items.map((product, i) => (
        <FeaturedProduct key={i} featureProduct={product} profileData={profileData} />
      ))}
    </div>
  );
}
