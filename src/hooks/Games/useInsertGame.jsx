import { supabase } from "../services/supabase";

async function useInsertGame(newCategory) {
  const { data, error } = await supabase.from("games").insert([newCategory]);

  if (error) {
    console.error("Error Inserting new user:", error.message);
  }

  return [data, error];
}

export default useInsertGame;
