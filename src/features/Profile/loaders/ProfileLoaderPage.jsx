import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import ProfileHeaderBg from "./ProfileHeaderLoader";
import ProfileInfoLoader from "./ProfileInfoLoader";
import ProfileProductLoader from "./ProfileProductLoader";
import FeaturePagination from "../../../components/FeaturePagination";
import ProfileStatsLoader from "./ProfileStatsLoader";

export default function ProfileLoaderPage({ profileData }) {
  return (
    <main>
      <ProfileHeaderBg />
      <section>
        <div className="mx-auto md:px-4">
          <div className="relative -mt-12 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
            <div className="px-5 xl:px-10">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[34%,59%,0%] lg:gap-9 xl:grid-cols-[30%,62%,0%] xl:gap-14">
                <ProfileInfoLoader />
                <div className="order-2  row-span-2 border-gray-200 pt-8 sm:order-3 sm:border-t md:col-span-2">
                  <h5 className="text mb-4 flex text-[1.09rem] font-medium sm:text-lg lg:text-xl">
                    <span className="   mr-2 mt-1   font-bold">
                      <FiChevronLeft />
                    </span>
                    Feature offers
                    <span className="ml-2 mt-1 font-bold">
                      <FiChevronRight />
                    </span>
                  </h5>
                  <div>
                    <ProfileProductLoader />
                  </div>
                  <div>
                    <FeaturePagination
                      total={profileData?.data?.items?.length}
                      onchange={"xl:flex"}
                      onchange2={"xl:hidden"}
                    />
                  </div>
                </div>

                <ProfileStatsLoader />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
