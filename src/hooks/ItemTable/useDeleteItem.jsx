import supabase from "../services/supabase";

async function useDeleteItem(id) {
  const { data, error } = await supabase.from("items").delete().eq("id", id);

  if (error) {
    console.error("Error Updating user:", error.message);
  }

  return [data, error];
}

export default useDeleteItem;
