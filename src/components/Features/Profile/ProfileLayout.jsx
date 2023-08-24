import { AiFillStar } from "react-icons/ai";
import ProfileProduct from "./ProfileProduct";
import DashboardListingFilter from "../Dashboard/DashboardListingFilter";
export default function ProfilePage() {
  return (
    <>
      <section className=" block mt-96">
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
      <section className=" py-16 bg-blueGray-200">
        <div className=" mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img
                      alt="..."
                      src="/ProfileImg2.jpg"
                      className="shadow-xl rounded-full h-auto align-middle border-none -m-12 ml-0 lg:-ml-0  max-w-[7rem] "
                    />
                  </div>
                </div>

                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center ">
                  <div className="py-6 px-3 mt-32 sm:mt-0 ">
                    <button
                      className="bg-red-500 hover:bg-red-400 active:bg-red-400 uppercase text-white font-bold hover:shadow-md shadow text-xs px-6 py-2.5 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Connect
                    </button>
                    <button
                      className="bg-gray-600 hover:bg-gray-500 active:bg-red-400 uppercase text-white font-bold hover:shadow-md shadow text-xs px-6 py-2.5 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Message
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center  lg:pt-2 pt-8">
                    <div className="mr-6 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        27
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Followers{" "}
                      </span>
                    </div>
                    <div className="mr-4 p-3 text-center ">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        3
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Following{" "}
                      </span>
                    </div>
                    <div className="mr-4 p-3 text-center ">
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
              </div>
              <div className="text-center mb-12 ml-12">
                <h3 className="text-[1.8rem]   font-medium    text-blueGray-700 ">
                  Ibad ur Rehman
                </h3>
                <p className="text-[0.8rem] mt-0.5 uppercase">Level 73</p>
              </div>
              <div className="grid grid-cols-[30%,70%] ]">
                <div className="bg-gray-100 h-[100rem] mr-20 "></div>
                <div>
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
      ;
    </>
  );
}
