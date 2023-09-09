import { supabase } from "../services/supabase";

async function useInsertItem(newItem) {
  const { data, error } = await supabase.from("items").insert([newItem]);

  if (error) {
    console.error("Error Inserting new user:", error.message);
  }

  return [data, error];
}

export default useInsertItem;
