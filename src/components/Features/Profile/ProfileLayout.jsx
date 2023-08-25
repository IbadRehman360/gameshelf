import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import ProfileProduct from "./ProfileProduct";
import TrendingGiftCard from "../../FeatureTrendingGiftCards";
import DashboardListingFilter from "../Dashboard/DashboardListingFilter";
import { useState } from "react";
import FuturePagination from "../../FeaturePagination";
export default function ProfilePage() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prevState) => !prevState);
  };
  return (
    <>
      <section className=" ">
        <div
          className="w-full   object-cover  h-[240px] bg-center  bg-cover bg-no-repeat sm:bg-cover "
          style={{ backgroundImage: 'url("/ProfileBanner.png")' }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-5 bg-black"
          ></span>
        </div>

        <div
          className="top-auto bottom-0  left-0 right-0 w-full absolute pointer-events-none overflow-hidden "
          style={{ transform: "translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section className=" bg-blueGray-200">
        <div className=" mx-auto  md:px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-xl rounded-lg -mt-16">
            <div className="px-6">
              <div className=" justify-center md:justify-between lg:justify-around md:flex-nowrap lg:flex-wrap mb-4 md:mb-8">
                <div className="order-2 sm:order-0 px-4 lg:order-3 lg:text-right">
                  <div className="mt-16 order-0 md:order-1 lg:order-1 text-center md:mt-0 my-4">
                    <div className="w-full mb-4 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <img
                          alt="..."
                          src="/ProfileImg2.jpg"
                          className="shadow-xl rounded-full h-auto align-middle border-none mr-0 -mt-28 md:-mt-12 ml-0 lg:-ml-0 max-w-[7rem] "
                        />
                      </div>
                    </div>
                    <h3 className="text-[1.3rem] md:text-[1.6rem]   font-medium text-blueGray-700">
                      Ibad ur Rehman
                    </h3>
                    <p className="text-[0.8rem] mt-0.5 uppercase">Level 73</p>
                  </div>
                  <div className="flex justify-center gap-2 md:gap-1 md:justify-end my-5 md:py-6 lg:px-3 md:mt-0">
                    <button
                      className="bg-red-500 hover:bg-red-400 active:bg-red-400 uppercase text-white font-bold hover:shadow-md shadow text-xs px-6 py-2.5 md:mr-2 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Connect
                    </button>
                    <button
                      className="bg-gray-600 hover:bg-gray-500 active:bg-red-400 uppercase text-white font-bold hover:shadow-md shadow text-xs px-6 py-2.5 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Message
                    </button>
                  </div>
                </div>
                <div className=" mt-12">
                  <div className="grid grid-cols-1 gap-8 md:gap-[3%] sm:grid-cols-[38%,55%] md:grid-cols-[35%,63%] lg:grid-cols-[25%,72%]">
                    <div className="flex flex-col gap-8 ">
                      <div className="sm:bg-gray-50 sm:p-4 rounded-lg">
                        <div className="flex flex-col ">
                          <div className="flex justify-between text-[0.92rem] sm:border-t-0 border-y  sm:py-2 sm:pb-4 py-6">
                            <span className="text-gray-500  ">
                              Member Since
                            </span>
                            <span className="text-[0.9rem] font-medium">
                              August, 2023
                            </span>
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
                              <p className="text-gray-500 text-[0.9rem] ">
                                (123k orders)
                              </p>
                            </span>
                          </div>
                          <div className="flex justify-between  text-[0.92rem] pt-6 pb-4">
                            <span className="text-gray-500">
                              Last days rating
                            </span>
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
                            <span className="text-sm   text-gray-500 mt-1 font-normal ">
                              edit
                            </span>
                          </h3>
                          <div className="flex flex-wrap ">
                            <div className="mb-4 text-sm  md:text-md font-normal gap-4 text-gray-500 grid leading-relaxed text-blueGray-700">
                              <p>
                                We offer various items,services in our store for
                                your enjoyment and convenience. ^-^
                              </p>
                              <p>
                                Over the past 8 years, we have successfully
                                fulfilled more than 2,000,000 orders across
                                various websites.
                              </p>
                              <p>
                                Contact Me if you got any problem or some other
                                questions
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
                          </div>
                          <a
                            href="#pablo"
                            className="font-normal ml-2 md:text-md text-sm text-red-500"
                            onClick={toggleShowMore}
                          >
                            {showMore ? "Show less" : "Show more"}
                          </a>
                        </div>
                      </div>
                      <div className="md:bg-gray-50 md:p-4 pb-4 rounded-lg border-b-2 ">
                        <h3 className="text-lg font-semibold">Languages</h3>
                        <div className="grid grid-cols-2  py-6">
                          <div className="bg-white w-fit p-5 rounded-lg border-[1px] border-gray-400">
                            English
                          </div>
                          <div className="bg-white w-fit p-5 rounded-lg border-[1px] border-gray-400">
                            English
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <h5 className="text-[1.4rem] mb-2 font-medium text-blueGray-700">
                        Feature offers
                      </h5>
                      <DashboardListingFilter />
                      <ProfileProduct />
                      <FuturePagination
                        onchange={"lg:flex"}
                        onchange2={"lg:hidden"}
                      />
                    </div>
                  </div>
                </div>
                <TrendingGiftCard />

                {/* <div className="order-1 md:order-0 w-full md:w-fit px-4 md:px-0   lg:px-4 lg:order-1">
                  <div className=" justify-center gap-8 lg:justify-start pt-0 hidden md:flex md:pt-2 lg:pt-2 sm:mr-4 my-2 sm:my-0">
                    <div className="sm:p-3 text-center md:hidden lg:block">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        27
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Followers{" "}
                      </span>
                    </div>
                    <div className="sm:p-3 text-center ">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        3
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Following{" "}
                      </span>
                    </div>
                    <div className="sm:p-3 text-center ">
                      <span className="text-lg mt-0.5 font-bold block uppercase tracking-wide text-blueGray-600">
                        1034{" "}
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Items Sold
                      </span>
                    </div>
                  </div>
                </div> */}
              </div>
              {/* <div className="grid grid-cols-1 gap-8 md:gap-[3%] sm:grid-cols-[40%,55%] md:grid-cols-[35%,63%] lg:grid-cols-[25%,72%]">
                <div className="flex flex-col gap-8 ">
                  <div className="md:bg-gray-50 md:p-4 rounded-lg">
                    <div className="flex flex-col gap-4 ">
                      <div className="flex justify-between   border-b   my-4">
                        <span className="text-gray-500  ">Member Since</span>
                        <span>August, 2023</span>
                      </div>
                      <div className="flex justify-between border-t   my-4">
                        <span className="text-gray-500  ">
                          Successful delivery
                        </span>
                        <span className=""> 🥈 97.47%</span>
                      </div>
                      <div className="flex justify-between border-t">
                        <span className="text-gray-500">Last days rating</span>
                        <div className="flex gap-3 border-t">
                          <div className="flex gap-1 items-center text-green-500 ">
                            <IoMdThumbsUp />
                            <span>100%</span>
                          </div>
                          <div className="flex gap-1 items-center text-red-500 ">
                            <IoMdThumbsDown />
                            <span>0%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between ">
                        <span className="text-gray-500">All time rating</span>
                        <div className="flex gap-3">
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
                      <div className="flex justify-evenly border-y-2">
                        <div className="sm:p-3 text-center md:hidden lg:block  ">
                          <span className="text-lg font-bold block uppercase tracking-wide text-blueGray-600">
                            238
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Followers{" "}
                          </span>
                        </div>
                        <div className="sm:p-3 text-center  ">
                          <span className="text-lg font-bold block uppercase tracking-wide text-blueGray-600">
                            12
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Following{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:bg-gray-50 md:p-4 rounded-lg border-b-2 ">
                    <div className="flex flex-col gap-4 py-4">
                      <h3 className="text-xl font-semibold">Description</h3>
                      <div className="flex flex-wrap  justify-center">
                        <div className="mb-4 text-sm  md:text-md font-normal gap-4 text-gray-500 grid leading-relaxed text-blueGray-700">
                          <p>
                            We offer various items,services in our store for
                            your enjoyment and convenience. ^-^
                          </p>
                          <p>
                            Over the past 8 years, we have successfully
                            fulfilled more than 2,000,000 orders across various
                            websites.
                          </p>
                          <p>
                            Contact Me if you got any problem or some other
                            questions
                          </p>
                        </div>
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
                      <a
                        href="#pablo"
                        className="font-normal ml-2 md:text-md text-sm text-red-500"
                        onClick={toggleShowMore}
                      >
                        {showMore ? "Show less" : "Show more"}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pb-8">
                  <h5 className="text-[1.4rem] font-medium text-blueGray-700">
                    Feature Items
                  </h5>
                  <DashboardListingFilter />
                  <ProfileProduct />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
