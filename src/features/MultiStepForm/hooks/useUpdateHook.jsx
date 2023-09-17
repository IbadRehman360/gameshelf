import supabase from "../../../services/supabase";

const useUpdateHook = async (values, user) => {
  console.log(user.id)
  // Use the 'values' parameter to provide data for upsert
  const { data: updatedData, error } = await supabase
    .from("items")
    .upsert([
      {
        title: values.title,
        price: values.price,
        description: values.description,
        stock: values.stock,
        images: values.images.name,
        options: values.options,
        seller_id: user.id,
        category_id: values.serviceId,
        game_id: values.gameId
      },
    ]);


  if (error) {
    console.error(error); // Change 'console.log' to 'console.error'
  }

  if (updatedData) { // Change 'if (data)' to 'if (updatedData)'
    console.log(updatedData); // Change 'console.log(data)' to 'console.log(updatedData)'
  }

  return [updatedData, error];
};

export default useUpdateHook;