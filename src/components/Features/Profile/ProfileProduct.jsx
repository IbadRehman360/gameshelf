import DashboardItems from "../../FeatureProduct";

export default function dashboardItems() {
  return (
    <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4  3xl:grid-cols-5  lg:gap-4">
      {Array.from({ length: 4 }, (item, i) => (
        <DashboardItems key={i} />
      ))}
    </div>
  );
}
