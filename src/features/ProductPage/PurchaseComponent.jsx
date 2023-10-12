/* eslint-disable tailwindcss/no-custom-classname */
import BreadCrumbs from "./BreadCrumbs";
import PurchaseUser from "./PurchaseUser";
import useEqProduct from "./useSpProduct";
import { AiOutlineLoading } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import ProductInfoTitles from "./ProductInfoTitles";
import ProductInfoCard from "./ProductInfoCard";
import ProductDescription from "./ProductDescription";
import ProfileProductDeletion from "./ProfileProductDeletion";

export default function ProductPage() {
  const { id } = useParams();
  const { product, isLoading, error } = useEqProduct(id);
  const { session } = useAuth();

  if (error) return <h1>ERROR</h1>;
  if (isLoading || !product) {
    return (
      <div className="flex h-screen items-center justify-center">
        <AiOutlineLoading className="animate-spin text-5xl text-gray-500 sm:text-6xl lg:text-7xl" />
      </div>
    );
  }

  return (
    <div className="pb-20">
      {session?.user?.id === product[0]?.seller_id?.id && (
        <div className="mb-6 animate-pulse rounded-lg border border-gray-500 bg-gray-50 p-3.5 text-center shadow-lg">
          <p className="text-sm text-gray-900">
            You are currently viewing your own profile.
          </p>
        </div>
      )}
      <div className="mx-auto mt-4 max-w-[1400px] p-4 sm:p-8">
        <BreadCrumbs id={id} />
        <div className="my-6 mb-10 ml-1 flex justify-between">
          <h1 className="pt-2 text-lg font-bold text-gray-700 sm:text-xl lg:text-[1.3rem]">
            {product[0]?.title}
          </h1>
        </div>
        <div className="flex flex-col gap-10 md:flex-row lg:gap-20">
          <div className="flex flex-col gap-6 rounded-lg border-[1px] p-4 sm:p-8 md:w-2/3 md:gap-8 lg:w-3/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <PurchaseUser user={product} />
              </div>
              {/* {session?.user?.id === product[0]?.seller_id?.id && ( */}
              <div className="mb-10">
                <ProfileProductDeletion
                  id={product[0]?.id}
                  game={product[0]?.game_id.title}
                />
              </div>
              {/* )} */}
            </div>

            <ProductInfoTitles product={product} />
            <ProductDescription product={product} session={session} />
          </div>
          <ProductInfoCard product={product} />
        </div>
      </div>
    </div>
  );
}
