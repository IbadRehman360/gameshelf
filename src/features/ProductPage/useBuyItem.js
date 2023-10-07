import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { deletePurchasedProduct, updateBuyerCoins } from "../../services/apiItem";
export default function useUpdateDeleteProduct() {
    const navigate = useNavigate();

    const mutationFn = async ({ updatedBuyerCoin, buyerID, sellerProductId }) => {
        const updatePromise = updateBuyerCoins(buyerID, updatedBuyerCoin);
        const deletePromise = deletePurchasedProduct(sellerProductId);

        const [updatedData, deletedProduct] = await Promise.all([updatePromise, deletePromise]);

        if (updatedData && deletedProduct) {
            console.log(updatedData);
            navigate("/dashboard");
            return deletedProduct;
        }

    };

    const { mutate, isLoading } = useMutation(mutationFn, {
        onError: (error) => {
            console.error("Error updating data:", error);
        },
    });

    return { mutate, isLoading };
}
