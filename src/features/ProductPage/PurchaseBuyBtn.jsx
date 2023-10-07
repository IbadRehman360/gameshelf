import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthProvider";
import useGetUser from "../../layouts/getUser";
import useUpdateDeleteProduct from "./useBuyItem";
import { useState } from "react";

export default function PurchaseBuyBtn({
  productPrice,
  sellerProductId,
  productTitle,
}) {
  const navigate = useNavigate();
  const { session } = useAuth();
  const isSessionAvailable = !!session;
  const user = session ? useGetUser(session.user.id)?.user || [] : [];
  const buyerCoins = user.length > 0 ? user[0].coin : 0;
  const buyerID = user.length > 0 ? user[0].id : null;
  const { mutate, isLoading } = useUpdateDeleteProduct();

  const handleButtonClick = async () => {
    if (!isSessionAvailable) {
      navigate("/login");
    } else if (productPrice > buyerCoins) {
      alert("You don't have enough coins to purchase");
    } else {
      try {
        const updatedBuyerCoin = buyerCoins - productPrice;
        navigate(
          "/dashboard/" + productTitle.toLowerCase().split(" ").join("")
        );
        alert("You Successfully Purchase  Your Order");
        const deletedProduct = await mutate({
          updatedBuyerCoin,
          buyerID,
          sellerProductId,
        });
      } catch (error) {
        console.error("Error purchasing product:", error);
      }
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleButtonClick}
        className="btn flex w-full items-center justify-center border border-gray-300 bg-white/60 tracking-wide text-gray-800"
      >
        <AiOutlineShoppingCart size={18} /> <span>Buy Now</span>
      </button>
    </div>
  );
}
