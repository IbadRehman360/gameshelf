import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthProvider";
import useGetUser from "../../layouts/getUser";
import useUpdateDeleteProduct from "./useBuyItem";
import toast from "react-hot-toast";
export default function PurchaseBuyBtn({ product }) {
  const navigate = useNavigate();
  const { session } = useAuth();
  const isSessionAvailable = !!session;

  const user = isSessionAvailable
    ? useGetUser(session.user.id)?.user || []
    : [];
  const buyerCoins = user.length > 0 ? user[0].coin : 0;
  const buyerID = user.length > 0 ? user[0].id : null;

  const { mutate, isLoading } = useUpdateDeleteProduct();

  const productPrice = product[0]?.price;

  const handleButtonClick = async () => {
    if (!isSessionAvailable) {
      navigate("/login");
    } else if (product[0]?.price > buyerCoins) {
      toast.error("You don't have enough coins to purchase");
    } else {
      // try {
      //   const formattedBuyerCoin = parseInt(buyerCoins - product[0]?.price);
      navigate(`/chat/new/${product[0]?.seller_id.id}`);
      //   toast.success("You have successfully made your purchase.");
      //   const deletedProduct = await mutate({
      //     formattedBuyerCoin,
      //     buyerID,
      //     sellerProductId: product[0]?.id,
      //   });
      // } catch (error) {
      //   console.error("Error purchasing the product:", error);
      // }
    }
  };

  const isSeller = session?.user?.id === product[0]?.seller_id?.id;

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      disabled={isSeller}
      className={`btn flex w-full items-center justify-center border border-gray-400 bg-gray-50 tracking-wide text-gray-800`}
      style={{
        backgroundColor: isSeller ? "#fbfcfb" : null,
      }}
    >
      <AiOutlineShoppingCart size={18} /> <span>Buy Now</span>
    </button>
  );
}
