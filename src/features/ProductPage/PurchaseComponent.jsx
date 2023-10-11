/* eslint-disable tailwindcss/no-custom-classname */
import BreadCrumbs from "./BreadCrumbs";
import { useEffect, useState } from "react";
import PurchaseUser from "./PurchaseUser";
import useEqProduct from "./useSpProduct";
import { AiOutlineLoading } from "react-icons/ai";

import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import ProfileEditDescription from "../Profile/components/ProfileEditDescription";
import ProductEdit from "./ProductEdit";
import ProductInfoTitles from "./ProductInfoTitles";
import ProductInfoCard from "./ProductInfoCard";

export default function ProductPage() {
  const { id } = useParams();
  const { product, loading, productError } = useEqProduct(id);
  const { session } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [description, setDescription] = useState("");
  useEffect(() => {
    if (product) {
      setDescription(product[0]?.description);
    }
  }, [product]);
  if (productError) return <h1>ERROR</h1>;
  if (loading || !product) {
    return (
      <div className="flex h-screen items-center justify-center">
        <AiOutlineLoading className="animate-spin text-5xl text-gray-500 sm:text-6xl lg:text-7xl" />
      </div>
    );
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    setIsDeleting(true);
  };
  const handleSave = () => {
    setIsEditing(false);
  };

  const isSessionAvailable = !!session;

  return (
    <div className="pb-20">
      {session?.user?.id === product[0]?.seller_id?.id && (
        <div className="mb-6 border-gray-500 border animate-pulse rounded-lg bg-gray-50 p-3.5 text-center shadow-lg">
          <p className="text-sm text-gray-900">
            You are currently viewing your own profile.
          </p>
        </div>
      )}
      <div className="mx-auto mt-4 max-w-7xl p-4 sm:p-8">
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
              <ProductEdit
                isSessionAvailable={isSessionAvailable}
                session={session}
                product={product}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </div>

            <ProductInfoTitles product={product} />
            <div className="flex flex-col gap-4">
              {isEditing && <button onClick={handleSave}>save</button>}
              <h3 className="text-md font-semibold sm:text-lg md:text-xl">
                Description
              </h3>
              {isEditing ? (
                <div>
                  <ProfileEditDescription
                    newDescription={description}
                    setNewDescription={setDescription}
                  />
                </div>
              ) : (
                <>
                  <div
                    className="text-[0.86rem] tracking-wide text-gray-800"
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    <p>{description}</p>
                  </div>
                </>
              )}
            </div>
          </div>
          <ProductInfoCard product={product} />
        </div>
      </div>
    </div>
  );
}
