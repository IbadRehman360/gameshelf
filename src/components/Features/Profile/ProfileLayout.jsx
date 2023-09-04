import ProfileProduct from "./ProfileProduct";
import DashboardListingFilter from "../AllSellerProductPage/AllSellerListingListingFilter";
import FuturePagination from "../../FeaturePagination";
import ProfileInfo from "./ProfileInfo";
import ProfileStats from "./ProfileStats";
import ProfileHeaderBg from "./ProfileHeaderBg";

export default function ProfilePage() {
  return (
    <>
     <ProfileHeaderBg />
      <section className="bg-blueGray-200">
        <div className="mx-auto md:px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-xl rounded-lg -mt-12">
            <div className="xl:px-10 px-5   ">
              <div className="sm:grid  grid-cols-1  md:grid-cols-[34%,59%,0%]  xl:grid-cols-[30%,62%,0%] lg:gap-9 gap-8 xl:gap-14  ">
              <ProfileInfo />
                <div className="order-2 sm:order-3 md:col-span-2 row-span-2 ">
                  <h5 className="text-[1.4rem] mb-2 font-medium text-blueGray-700">
                    Feature offers
                  </h5>
                  <DashboardListingFilter />
                  <ProfileProduct />
                  <FuturePagination
                    onchange={"xl:flex"}
                    onchange2={"xl:hidden"}
                  />
                </div>
                <ProfileStats />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
