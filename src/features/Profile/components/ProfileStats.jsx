import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import moment from "moment";

import ProfileLanguage from "./ProfileLanguage";
import ProfileDescription from "./ProfileDescription";

export default function ProfileComponent({ profileData }) {
  const user = profileData;
  return (
    <div className="row-span-2 mt-12">
      <div className="grid">
        <div className="flex flex-col gap-8">
          <div className="rounded-lg md:bg-gray-50 md:p-4">
            <div className="flex flex-col">
              <div className="flex justify-between border-y py-6 text-[0.92rem] sm:border-t-0 sm:py-2 sm:pb-4">
                <span className="text-gray-500">Member Since</span>
                <span className="text-[0.9rem] font-medium">
                  {moment(user.created_at).format("MMM D, YYYY")}
                </span>
              </div>
              <div className="flex justify-between border-b py-6">
                <span className="text-[0.92rem] text-gray-500">
                  Successful
                  <br /> delivery
                </span>
                <span className="">
                  {" "}
                  <p className="">
                    🏅{" "}
                    <span className="text-[0.9rem]  font-medium tracking-wide text-gray-900">
                      {user.data.successful_delivery}%
                    </span>{" "}
                  </p>
                  <p className="text-[0.9rem] text-gray-500">(123k orders)</p>
                </span>
              </div>
              <div className="flex justify-between pb-4 pt-6 text-[0.92rem]">
                <span className="text-gray-500">Last days rating</span>
                <div className="flex gap-3 text-sm">
                  <div className="flex items-center gap-1 text-green-500">
                    <IoMdThumbsUp />
                    <span>100%</span>
                  </div>
                  <div className="flex items-center gap-1 text-red-500">
                    <IoMdThumbsDown />
                    <span>0%</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between pb-6">
                <span className="text-[0.92rem] text-gray-500">
                  All time rating
                </span>
                <div className="flex gap-4 text-[0.94rem]">
                  <div className="flex items-center gap-1 text-green-500">
                    <IoMdThumbsUp />
                    <span>96%</span>
                  </div>
                  <div className="flex items-center gap-1 text-red-500">
                    <IoMdThumbsDown />
                    <span>4%</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-around border-y-2 py-6">
                <div className="text-center lg:block">
                  <span className="block text-xl  font-medium uppercase tracking-wide text-gray-700">
                    {user.data.followers}
                  </span>
                  <span className="text-sm tracking-wide text-gray-500">
                    Followers
                  </span>
                </div>
                <div className="border-r"></div>
                <div className="text-center">
                  <span className="block text-xl font-medium uppercase tracking-wide text-gray-700">
                    {user.data.following}
                  </span>
                  <span className="text-sm tracking-wide text-gray-500">
                    Following
                  </span>
                </div>
              </div>
            </div>
          </div>
          <ProfileDescription profileData={profileData} />
          <ProfileLanguage profileData={profileData} />
        </div>
      </div>
    </div>
  );
}
