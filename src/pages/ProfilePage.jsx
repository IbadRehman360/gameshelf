import DashboardListingFilter from "../features/AllSellerProductPage/AllSellerListingListingFilter";
import FuturePagination from "../components/FeaturePagination";

import useGetProfile from "../features/profile/hooks/useGetProfile";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { lazy, Suspense } from "react";

//Loaders
import ProfileProductLoading from "../features/Profile/components/loaders/ProfileProductLoading";
import ProfileStatsLoader from "../features/Profile/components/loaders/ProfileStatsLoader";
import ProfileInfoLoading from "../features/Profile/components/loaders/ProfileInfoLoading";
import ProfileHeaderBgLoading from "../features/Profile/components/loaders/ProfileHeaderBgLoading";

const ProfileHeaderBg = lazy(() =>
  import("../features/Profile/ProfileHeaderBg")
);
const ProfileInfo = lazy(() => import("../features/Profile/ProfileInfo"));
const ProfileStats = lazy(() => import("../features/Profile/ProfileStats"));
const ProfileProduct = lazy(() => import("../features/Profile/ProfileProduct"));


export default function ProfilePage() {
  const params = useParams();
  const navigate = useNavigate();
  const [profileData] = useGetProfile(params.user);

  if (profileData.none) {
    navigate("/")
  }

  return (
    <main>
      <Suspense fallback={<ProfileHeaderBgLoading />}>
        <ProfileHeaderBg />
      </Suspense>
      <section className="bg-blueGray-200">
        <div className="mx-auto md:px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-xl rounded-lg -mt-12">
            <div className="xl:px-10 px-5">
              <div className="grid  grid-cols-1  md:grid-cols-[34%,59%,0%]  xl:grid-cols-[30%,62%,0%] lg:gap-9 gap-8 xl:gap-14  ">
                <Suspense fallback={<ProfileInfoLoading />}>
                  <ProfileInfo profileData={profileData} />
                </Suspense>
                <div className="order-2 sm:order-3 md:col-span-2 row-span-2 ">
                  <h5 className="text-[1.4rem] mb-2 font-medium text-blueGray-700">
                    Feature offers
                  </h5>
                  <DashboardListingFilter />
                  <Suspense fallback={<ProfileProductLoading />}>
                    <ProfileProduct />
                  </Suspense>
                  <FuturePagination
                    onchange={"xl:flex"}
                    onchange2={"xl:hidden"}
                  />
                </div>
                <Suspense fallback={<ProfileStatsLoader/>}>
                  <ProfileStats profileData={profileData}  />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
