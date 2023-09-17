import { AiFillStar } from "react-icons/ai";
export default function ProfileCard() {
  return (
    <div className="flex flex-col gap-8 p-4">
      <div className="flex flex-col items-center gap-4">
        <span className="relative inline-block">
          <img
            className="h-16 w-16 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-white" />
        </span>
        <h1 className="text-xl font-bold">JohnDoe</h1>
        <button className="btn w-52 bg-navy-blue text-white hover:text-black">
          Chat
        </button>
      </div>
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full justify-between">
          <p>Member Since</p>
          <p>August, 2023</p>
        </div>
        <hr className="w-full border-gray-300" />
        <div className="flex w-full justify-between">
          <p>Items Sold</p>
          <p>10034</p>
        </div>
        <hr className="w-full border-gray-300" />
        <div className="flex w-full justify-between">
          <p>Rating</p>
          <div className="flex items-center gap-1">
            <AiFillStar color="orange" />
            4.9
          </div>
        </div>
      </div>
    </div>
  );
}
