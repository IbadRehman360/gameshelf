import { useState } from "react";
import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import ProfileEdit from "./ProfileEdit";
import ProfileEditLanguage from "./ProfileEditLanguage";
import moment from "moment";

export default function ProfileInfo({ profileData }) {
  const [isEdit, setIsEdit] = useState(false);
  const [isEditLanguage, setIsEditLanguage] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore((prevState) => !prevState);
  };

  const user = profileData;

  //Erase after attaching with live description content from database
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
                    <span className="text-sm font-medium text-gray-900">
                      {user.successful_delivery}%
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
                  <span className="block text-xl font-semibold uppercase tracking-wide text-gray-700">
                    {user.followers}
                  </span>
                  <span className="text-sm tracking-wide text-gray-500">
                    Followers
                  </span>
                </div>
                <div className="border-r"></div>
                <div className="text-center">
                  <span className="block text-xl font-semibold uppercase tracking-wide text-gray-700">
                    {user.following}
                  </span>
                  <span className="text-sm tracking-wide text-gray-500">
                    Following
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border-b-2 pb-4 md:bg-gray-50 md:p-4">
            <div className="flex flex-col gap-4">
              <h3 className="inline-flex justify-between text-xl font-semibold">
                Description{" "}
                <button
                  onClick={() => setIsEdit(!isEdit)}
                  className="mt-1 text-sm font-normal text-gray-500 underline"
                >
                  Edit
                </button>
              </h3>
              <div className="flex flex-wrap">
                {isEdit ? (
                  <ProfileEdit content={user.description} />
                ) : (
                  <>
                    {/* <div className="mb-4 text-sm md:text-md font-normal gap-4 text-gray-500 grid leading-relaxed text-blueGray-700">
                      <p>
                        We offer various items,services in our store for your
                        enjoyment and convenience. ^-^
                      </p>
                      <p>
                        Over the past 8 years, we have successfully fulfilled
                        more than 2,000,000 orders across various websites.
                      </p>
                      <p>
                        Contact Me if you got any problem or some other
                        questions{" "}
                        {!showMore && (
                          <a
                            href="#pablo"
                            className="font-normal ml-2 md:text-md text-sm text-red-500"
                            onClick={toggleShowMore}
                          >
                            Show more
                          </a>
                        )}
                      </p>
                    </div>
                    {showMore && (
                      <div className="mb-4 text-sm md:text-md font-normal gap-4 text-gray-500 grid leading-relaxed text-blueGray-700">
                        <p>Why you should choose us?</p>
                        <p>✔️ 100% Safe and Cheap</p>
                        <p>✔️ Fast Delivery</p>
                        <p>✔️ Verified by G2G.</p>
                        <p>✔️ Friendly Support</p>
                        <p>✔️ Changeable Gmail</p>
                      </div>
                    )} */}
                    {user.description}
                  </>
                )}
              </div>
              {showMore && (
                <a
                  href="#pablo"
                  className="ml-2 text-sm font-normal text-red-500"
                  onClick={toggleShowMore}
                >
                  Show less
                </a>
              )}
            </div>
          </div>
          <div className="rounded-lg border-b-2 pb-4 md:bg-gray-50 md:p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Languages</h3>
              <button
                onClick={() => setIsEditLanguage(!isEditLanguage)}
                className="mt-1 text-sm font-normal text-gray-500 underline"
              >
                Edit
              </button>
            </div>
            {isEditLanguage ? (
              <ProfileEditLanguage />
            ) : (
              <div className="flex flex-wrap gap-4 py-6">
                {user?.languages ?
                  user.languages.map((language) => (
                    <div key={language} className="w-fit rounded-lg border-[1px] border-gray-400 bg-white p-5">
                      {language}
                    </div>
                  )): <></>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
