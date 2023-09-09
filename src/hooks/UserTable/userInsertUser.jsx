import { supabase } from "../services/supabase";

async function useInsertUser(newUser) {
  const { data, error } = await supabase.from("users").insert([newUser]);

  if (error) {
    console.error("Error Inserting new user:", error.message);
  }

  return [data, error];
}

export default useInsertUser;
