import DashboardItems from "./FeatureProduct";

export default function dashboardItems() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-6">
      {Array.from({ length: 20 }, (item, i) => (
        <DashboardItems key={i} />
      ))}
    </div>
  );
}
