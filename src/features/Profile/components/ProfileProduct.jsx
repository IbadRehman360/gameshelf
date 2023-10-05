import FeaturedProduct from "./ProfileFeaturedProduct";

export default function DashboardItems({ profileData }) {
  return (
    <div className="mt-8 grid  grid-cols-1 gap-5 pb-8 sm:grid-cols-2 md:grid-cols-2 lg:mt-12 lg:grid-cols-2 lg:gap-4 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
      {profileData?.data?.items?.map((product, i) => (
        <FeaturedProduct
          key={i}
          featureProduct={product}
          profileData={profileData}
        />
      ))}
    </div>
  );
}
