import supabase from "../../../services/supabase";

const createItem = async (values, user) => {
  const { data: updatedData, error } = await supabase.from("items").upsert([
    {
      title: values.title,
      price: values.price,
      description: values.description,
      stock: values.stock,
      images: values.images[0].name,
      options: values.options,
      seller_id: user.id,
      category_id: values.serviceId,
      game_id: values.gameId,
    },
  ]);

  if (error) {
    console.error(error);
  }

  if (updatedData) {
    console.log(updatedData);
  }

  return [updatedData, error];
};

export default createItem;
