import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { deletePurchasedProduct, updateBuyerCoins } from "../../services/apiItem";
import { queryClient } from "../../routes/routes";

export default function useUpdateDeleteProduct() {
    const navigate = useNavigate();

    const mutationFn = async ({ formattedBuyerCoin, buyerID, sellerProductId }) => {

        const updatePromise = updateBuyerCoins(buyerID, formattedBuyerCoin);
        const deletePromise = deletePurchasedProduct(sellerProductId);

        const [updatedData, deletedProduct] = await Promise.all([updatePromise, deletePromise]);

        if (updatedData && deletedProduct) {
            console.log(updatedData);
            navigate("/dashboard");
            return deletedProduct;
        }

    };

    const { mutate, isLoading } = useMutation(mutationFn, {
        onSuccess: () => {
            console.log("Data updated successfully!");
            queryClient.invalidateQueries(["user"]);
        },
        onError: (error) => {
            console.error("Error updating data:", error);
        },
    });

    return { mutate, isLoading };
}
