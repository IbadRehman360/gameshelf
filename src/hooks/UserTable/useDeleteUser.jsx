import supabase from "../services/supabase";

async function useDeleteUser(id) {
  const { data, error } = await supabase.from("users").delete().eq("id", id);

  if (error) {
    console.error("Error Updating user:", error.message);
  }

  return [data, error];
}

export default useDeleteUser;
