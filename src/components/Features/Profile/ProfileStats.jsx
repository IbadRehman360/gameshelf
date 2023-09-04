import { useState } from "react";
import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import ProfileEdit from "./ProfileEdit";
import ProfileEditLanguage from "./ProfileEditLanguage";

export default function ProfileInfo() {
  const [isEdit, setIsEdit] = useState(false);
  const [isEditLanguage, setIsEditLanguage] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore((prevState) => !prevState);
  };

  //Erase after attaching with live description content from database
  let content =
    "We offer various items,services in our store for your enjoyment and convenience. ^-^ Over the past 8 years, we have successfully fulfilled more than 2,000,000 orders across various websites. Contact Me if you got any problem or some other questions";

  return (
    <div className="mt-12 order-0 row-span-2 ">
      <div className="grid">
        <div className="flex flex-col gap-8 ">
          <div className="md:bg-gray-50 md:p-4 rounded-lg">
            <div className="flex flex-col ">
              <div className="flex justify-between text-[0.92rem] sm:border-t-0 border-y  sm:py-2 sm:pb-4 py-6">
                <span className="text-gray-500  ">Member Since</span>
                <span className="text-[0.9rem] font-medium">August, 2023</span>
              </div>
              <div className="flex justify-between border-b    py-6">
                <span className="text-gray-500 text-[0.92rem]  ">
                  Successful
                  <br /> delivery
                </span>
                <span className=" ">
                  {" "}
                  <p className="   ">
                    🏅{" "}
                    <span className="text-sm font-medium text-gray-900">
                      97.47%
                    </span>{" "}
                  </p>
                  <p className="text-gray-500 text-[0.9rem] ">(123k orders)</p>
                </span>
              </div>
              <div className="flex justify-between  text-[0.92rem] pt-6 pb-4">
                <span className="text-gray-500">Last days rating</span>
                <div className="flex gap-3 text-sm ">
                  <div className="flex gap-1   items-center text-green-500 ">
                    <IoMdThumbsUp />
                    <span>100%</span>
                  </div>
                  <div className="flex gap-1 items-center text-red-500 ">
                    <IoMdThumbsDown />
                    <span>0%</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between pb-6 ">
                <span className="text-gray-500 text-[0.92rem]">
                  All time rating
                </span>
                <div className="flex gap-4 text-[0.94rem] ">
                  <div className="flex gap-1 items-center text-green-500">
                    <IoMdThumbsUp />
                    <span>96%</span>
                  </div>
                  <div className="flex gap-1 items-center text-red-500">
                    <IoMdThumbsDown />
                    <span>4%</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-around border-y-2  py-6">
                <div className=" text-center  lg:block  ">
                  <span className="text-xl font-semibold block uppercase tracking-wide  text-gray-700">
                    22.4k
                  </span>
                  <span className="text-sm text-gray-500 tracking-wide">
                    Followers{" "}
                  </span>
                </div>
                <div className="border-r "></div>
                <div className=" text-center ">
                  <span className="text-xl font-semibold block uppercase tracking-wide text-gray-700">
                    29
                  </span>
                  <span className="text-sm text-gray-500 tracking-wide">
                    Following{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:bg-gray-50 md:p-4 pb-4 rounded-lg border-b-2 ">
            <div className="flex flex-col gap-4 ">
              <h3 className="text-xl inline-flex justify-between font-semibold">
                Description{" "}
                <button
                  onClick={() => setIsEdit(!isEdit)}
                  className="text-sm text-gray-500 mt-1 font-normal underline"
                >
                  Edit
                </button>
              </h3>
              <div className="flex flex-wrap">
                {isEdit ? (
                  <ProfileEdit content={content} />
                ) : (
                  <>
                    <div className="mb-4 text-sm  md:text-md font-normal gap-4 text-gray-500 grid leading-relaxed text-blueGray-700">
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
                      <div className="  mb-4 text-sm  md:text-md font-normal gap-4 text-gray-500 grid leading-relaxed text-blueGray-700">
                        <p>Why you should choose us?</p>
                        <p>✔️ 100% Safe and Cheap</p>
                        <p>✔️ Fast Delivery</p>
                        <p>✔️ Verified by G2G.</p>
                        <p>✔️ Friendly Support</p>
                        <p>✔️ Changeable Gmail</p>
                      </div>
                    )}
                  </>
                )}
              </div>
              {showMore && (
                <a
                  href="#pablo"
                  className="font-normal ml-2 md:text-md text-sm text-red-500"
                  onClick={toggleShowMore}
                >
                  Show less
                </a>
              )}
            </div>
          </div>
          <div className="md:bg-gray-50 md:p-4 pb-4 rounded-lg border-b-2 ">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Languages</h3>
              <button
                onClick={() => setIsEditLanguage(!isEditLanguage)}
                className="text-sm text-gray-500 mt-1 font-normal underline"
              >
                Edit
              </button>
            </div>
            {isEditLanguage ?<ProfileEditLanguage/> :
            <div className="flex flex-wrap gap-4 py-6">
              <div className="bg-white w-fit p-5 rounded-lg border-[1px] border-gray-400">
                English
              </div>
              <div className="bg-white w-fit p-5 rounded-lg border-[1px] border-gray-400">
                English
              </div>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}
