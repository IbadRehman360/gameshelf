import { supabase } from "../services/supabase";

async function useInsertCategory(newCategory) {
  const { data, error } = await supabase
    .from("categories")
    .insert([newCategory]);

  if (error) {
    console.error("Error Inserting new user:", error.message);
  }

  return [data, error];
}

export default useInsertCategory;
