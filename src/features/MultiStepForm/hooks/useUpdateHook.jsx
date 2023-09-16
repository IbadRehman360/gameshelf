import supabase from "../../../services/supabase";

const useUpdateHook = async (formData, user) => {
  const { data: updatedData, error } = await supabase.from("items").upsert([
    {
      title: formData.title,
      price: formData.price,
      description: formData.description,
      stock: formData.stock,
      images: formData.images,
      options: formData.options,
      seller_id: user.id,
    },
  ]);

  return [updatedData, error];
};
export default useUpdateHook;
