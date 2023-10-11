import HeroCarousel from "../features/HomePage/components/HeroCarousel";
import TrendingGiftCards from "../features/HomePage/components/FeatureTrendingGiftCards";
import TrendingVideoGames from "../features/HomePage/components/FeatureTrendingVideoGames";
import PaymentOptions from "../features/HomePage/components/PaymentOptions";
import FeaturesList from "../features/HomePage/components/FeaturesList";
import {
  faHome,
  faComments,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import Categories from "../features/HomePage/components/Category.jsx";
import FeaturedProducts from "../features/HomePage/components/Products";
import ProductsFilter from "../features/HomePage/components/ProductsFilter";
import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGetUser from "../layouts/getUser";

export default function HomePage() {
  const [sortCriteria, setSortCriteria] = useState({
    orderBy: "created_at",
    orderDirection: "asc",
  });
  const { session } = useAuth();
  const { user: user1, loadingUser } = useGetUser(session?.user?.id);
  const user = user1 ? user1[0] : [];
  return (
    <>
      <div className="bg-[#fdfdfd]">
        <HeroCarousel />
        <div className="relative mx-auto border-2 bg-[#ffffff] bg-gradient-to-b">
          <h3 className="mb-2 ml-2 mt-6 block justify-center text-center text-[1.3rem] font-semibold text-gray-700 md:mb-4 md:mt-8 md:text-[1.7rem] lg:text-[1.7rem] 3xl:text-[1.8rem]">
            EXPLORE CATEGORIES
          </h3>
          <Categories />
          {/* <Link
          to="/dashboard"
          className="absolute hid right-0 mr-2 top-1/2 transform -translate-y-1/2"
          >
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link> */}
        </div>

        <div className="mx-auto mt-10 sm:mt-14 max-w-[1400px] bg-[#fdfdfd] px-0 xl:px-14">
          <ProductsFilter
            sortCriteria={sortCriteria}
            setSortCriteria={setSortCriteria}
          />
          <FeaturedProducts
            sortCriteria={sortCriteria}
            setSortCriteria={setSortCriteria}
          />
          <TrendingGiftCards />
          <TrendingVideoGames />
        </div>
        {!session ? (
          <div
            className="fixed bottom-0  py-2 bg-white w-full sm:hidden flex"
            style={{ boxShadow: "0px -1px 0px rgba(0, 0, 0, 0.1)" }}
          >
            <Link
              to={"login"}
              className="flex-1 text-center  ml-4 mr-2 bg-white border border-gray-400 text-gray-500 px-3 py-1 rounded-sm"
            >
              Login
            </Link>
            <Link
              to={"register"}
              className="flex-1 text-center  mr-4 bg-red-500 text-white px-3 py-1 rounded-sm"
            >
              Sign Up
            </Link>
          </div>
        ) : (
          <div
            className="fixed bottom-0 text-md py-2 pt-3 bg-white w-full md:hidden flex justify-around"
            style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
          >
            <Link to={"/"} className="flex flex-col items-center">
              <FontAwesomeIcon icon={faHome} style={{ color: "gray" }} />
              <span className="text-xs mt-1.5">Home</span>
            </Link>
            <Link to={"/chat"} className="flex flex-col items-center">
              <FontAwesomeIcon icon={faComments} style={{ color: "gray" }} />
              <span className="text-xs mt-1">Chat</span>
            </Link>
            <Link
              to={`/sell/${user?.username}`}
              className="flex flex-col items-center"
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={{ color: "gray" }}
              />
              <span className="text-xs mt-1">Sell</span>
            </Link>
            <Link
              to={`/profile/${user?.username}`}
              className="flex flex-col items-center"
            >
              {user?.avatar_image ? (
                <img
                  src={user?.avatar_image}
                  className="w-6 h-6 rounded-full"
                />
              ) : (
                <div className="w-6 h-6 -mt-[3px] rounded-full bg-gray-400 flex items-center justify-center">
                  <span className="text-xs text-white">
                    {user?.username?.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <span className="text-xs ">Profile</span>
            </Link>
          </div>
        )}

        <PaymentOptions />
        <FeaturesList />
      </div>
    </>
  );
}
