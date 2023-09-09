import supabase from "../services/supabase";

async function useUpdateItem() {
  const { data, error } = await supabase
    .from("items")
    .select()
    .eq("id", 1)
    .single();

  if (error) {
    console.error("Error Updating user:", error.message);
  }

  return [data, error];
}

export default useUpdateItem;
