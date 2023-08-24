import { AiFillStar } from "react-icons/ai";
import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import ProfileProduct from "./ProfileProduct";
import DashboardListingFilter from "../Dashboard/DashboardListingFilter";
export default function ProfilePage() {
  return (
    <>
      <section className="block mt-96">
        <div
          className="absolute top-20 w-full h-64 bg-center bg-cover"
          style={{ backgroundImage: 'url("/ProfileBanner.png")' }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-5 bg-black"
          ></span>
        </div>

        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
      <section className="pt-16 bg-blueGray-200">
        <div className=" mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center md:justify-between lg:justify-around md:flex-nowrap lg:flex-wrap mb-8 md:mb-32">
                <div className="order-2 sm:order-0 px-4 lg:order-3 lg:text-right">
                  <div className="flex justify-center gap-2 md:gap-1 md:justify-end my-4 md:py-6 lg:px-3 md:mt-0">
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
                <div className="order-1 md:order-0 w-full md:w-fit px-4 md:px-0 lg:px-4 lg:order-1">
                  <div className="flex justify-center gap-8 lg:justify-start pt-0 md:pt-2 lg:pt-2 sm:mr-4 my-2 sm:my-0">
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
                        {/* <AiFillStar className="    mt-1.5-" color="orange" />{" "} */}
                        1034{" "}
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Items Sold
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-16 order-0 md:order-1 lg:order-1 text-center md:mt-0 my-4">
                  <div className="w-full mb-6 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="/ProfileImg2.jpg"
                        className="shadow-xl rounded-full h-auto align-middle border-none mr-0 -mt-28 md:-mt-12 ml-0 lg:-ml-0 max-w-[7rem] "
                      />
                    </div>
                  </div>
                  <h3 className="text-[1.8rem] md:text-[1.6rem] font-medium text-blueGray-700">
                    Ibad ur Rehman
                  </h3>
                  <p className="text-[0.8rem] mt-0.5 uppercase">Level 73</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:gap-[3%] sm:grid-cols-2 lg:grid-cols-[25%,72%]">
                <div className="flex flex-col gap-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex flex-col gap-4">
                      <button
                        className="bg-red-500 hover:bg-red-400 active:bg-red-400 uppercase text-white font-bold hover:shadow-md shadow text-xs px-6 py-2.5 md:mr-2 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Edit Profile
                      </button>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Member Since</span>
                        <span>August, 2023</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Last Delivery</span>
                        <span>August, 2023</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Last days rating</span>
                        <div className="flex gap-3">
                          <div className="flex gap-1 items-center text-green-500">
                            <IoMdThumbsUp />
                            <span>100%</span>
                          </div>
                          <div className="flex gap-1 items-center text-red-500">
                            <IoMdThumbsDown />
                            <span>0%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between">
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
                    </div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex flex-col gap-4 py-4">
                      <h3 className="text-lg font-semibold">Description</h3>
                      <p>
                        Welcome to our store, Gaming for living. ^-^ If you are
                        looking for a specific account, you can contact us via
                        G2g Chat, We will help you with all our effort to find
                        the best account you want.! If I'm not online, you can
                        also buy an account and I'll get a notification.
                      </p>
                      <p>Why you should choose us?</p>
                      <p>✔️ 100% Safe and Cheap</p>
                      <p>✔️ Fast Delivery</p>
                      <p>✔️ Verified by G2G.</p>
                      <p>✔️ Friendly Support</p>
                      <p>✔️ 14-day Warranty (Except Unlock Guarantee)</p>
                      <p>✔️ Changeable Gmail</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex flex-col gap-4 py-4">
                      <h3 className="text-lg font-semibold">Languages</h3>
                      <div className="bg-white w-fit p-6 rounded-lg border-[1px] border-gray-400">English</div>
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
              </div>

              {/* <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </p>
                    <a href="#pablo" className="font-normal text-pink-500">
                      Show more
                    </a>
                  </div>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
