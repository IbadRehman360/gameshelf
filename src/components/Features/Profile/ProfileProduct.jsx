import DashboardItems from "../../FeatureProduct";

export default function dashboardItems() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2 lg:gap-4">
      {Array.from({ length: 20 }, (item, i) => (
        <DashboardItems key={i} />
      ))}
    </div>
  );
}
