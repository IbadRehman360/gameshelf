import DashboardItems from "../components/DashboardItem";
export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto my-10 p-5">
      <h2 className=" lg:text-[1.8rem] 3xl:text-[1.9rem] md:text-[1.7rem] text-[1.4rem] ml-2 font-semibold mb-5">
        Item Listing
      </h2>
      <DashboardItems />
    </div>
  );
}
