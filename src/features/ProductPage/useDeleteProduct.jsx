import { deletePurchasedProduct } from "../../services/apiItem";
import { useNavigate } from "react-router-dom";
import { queryClient } from "../../routes/routes";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useDeleteProduct() {
  const navigate = useNavigate();
  const mutationFn = async (id) => {
    try {
      navigate(`/dashboard/${id.game.toLowerCase().split(" ").join("")}`);
      toast.success("You have successfully deleted the Product.");
      const deletedProduct = await deletePurchasedProduct(id.id);
      if (deletedProduct) {
        return deletedProduct;
      }
    } catch (error) {
      toast.error("Error deleting the product, Please Try Again...");
      throw error;
    }
  };

  const { mutate, isLoading } = useMutation(mutationFn, {
    onSuccess: () => {
      console.log("Data updated successfully!");
      queryClient.invalidateQueries(["single"]);
    },
    onError: (error) => {
      console.error("Error updating data:", error);
    },
  });

  return { mutate, isLoading };
}
