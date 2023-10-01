import DashboardListingFilter from "../features/GameProducts/components/GameProductsListingFilter";
import FuturePagination from "../components/FeaturePagination";

import { useParams } from "react-router-dom";
import { lazy, Suspense } from "react";

//Loaders
import ProfileProductLoading from "../features/Profile/loaders/ProfileProductLoading";
import ProfileStatsLoader from "../features/Profile/loaders/ProfileStatsLoader";
import ProfileInfoLoading from "../features/Profile/loaders/ProfileInfoLoading";
import ProfileHeaderBgLoading from "../features/Profile/loaders/ProfileHeaderBgLoading";
import { useGetProfile } from "../services/apiProfile";

const ProfileHeaderBg = lazy(() =>
  import("../features/Profile/components/ProfileHeaderBg")
);
const ProfileInfo = lazy(() =>
  import("../features/Profile/components/ProfileInfo")
);
const ProfileStats = lazy(() =>
  import("../features/Profile/components/ProfileStats")
);
const ProfileProduct = lazy(() =>
  import("../features/Profile/components/ProfileProduct")
);

export default function ProfilePage() {
  const params = useParams();
  const [profileData] = useGetProfile(params.user);

  return (
    <main>
      <Suspense fallback={<ProfileHeaderBgLoading />}>
        <ProfileHeaderBg />
      </Suspense>
      <section>
        <div className="mx-auto md:px-4">
          <div className="relative -mt-12 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
            <div className="px-5 xl:px-10">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[34%,59%,0%] lg:gap-9 xl:grid-cols-[30%,62%,0%] xl:gap-14">
                <Suspense fallback={<ProfileInfoLoading />}>
                  <ProfileInfo profileData={profileData} />
                </Suspense>
                <div className="order-2 row-span-2 sm:order-3 md:col-span-2">
                  <h5 className="mb-2 text-[1.4rem] font-medium">
                    Feature offers
                  </h5>
                  <DashboardListingFilter />
                  <Suspense fallback={<ProfileProductLoading />}>
                    <ProfileProduct profileData={profileData} />
                  </Suspense>
                  <FuturePagination
                    onchange={"xl:flex"}
                    onchange2={"xl:hidden"}
                  />
                </div>
                <Suspense fallback={<ProfileStatsLoader />}>
                  <ProfileStats profileData={profileData} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
