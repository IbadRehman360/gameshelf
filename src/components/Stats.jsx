export default function Stats() {
  return (
    <div className="p-5">
      <div className="prose text-center my-5">
        <h1 className="font-normal text-gray-900">Game Shelf</h1>
      </div>
      <div className="mt-5 grid gap-10 grid-cols-4">
        <div className="flex flex-col gap-3 items-center text-center rounded-lg bg-white p-5 ">
          <p className="text-2xl font-semibold text-gray-900">524</p>
          <p className="text-sm font-medium text-gray-500">Users</p>
        </div>
        <div className="flex flex-col gap-3 items-center text-center rounded-lg bg-white p-5 ">
          <p className="text-2xl font-semibold text-gray-900">34</p>
          <p className="text-sm font-medium text-gray-500">Games</p>
        </div>
        <div className="flex flex-col gap-3 items-center text-center rounded-lg bg-white p-5 ">
          <p className="text-2xl font-semibold text-gray-900">353</p>
          <p className="text-sm font-medium text-gray-500">Items</p>
        </div>
        <div className="flex flex-col gap-3 items-center text-center rounded-lg bg-white p-5 ">
          <p className="text-2xl font-semibold text-gray-900">104</p>
          <p className="text-sm font-medium text-gray-500">Sellers</p>
        </div>
      </div>
    </div>
  );
}
