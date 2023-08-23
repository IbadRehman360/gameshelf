import { AiFillStar } from "react-icons/ai";
export default function ProfileCard() {
  return (
    <div className="flex flex-col gap-8 p-4">
      <div className="flex flex-col items-center gap-4">
        <img
          className="rounded-full"
          src="https://assets.g2g.com/user/avatar/1000630794_1691163110365.png"
        />
        <h1 className="text-xl font-bold">JohnDoe</h1>
        <button className="btn bg-navy-blue text-white hover:text-black w-52">
          Chat
        </button>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between w-full">
          <p>Member Since</p>
          <p>August, 2023</p>
        </div>
        <hr className="border-gray-300 w-full" />
        <div className="flex w-full justify-between">
          <p>Items Sold</p>
          <p>10034</p>
        </div>
        <hr className="border-gray-300 w-full" />
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
