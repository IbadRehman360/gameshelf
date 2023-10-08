import supabase from "../services/supabase";

export async function useGetCategories() {
  const { data, error } = await supabase.from("categories").select("*");

  if (error) {
    console.error("Error fetching categories:", error.message);
    throw new error();
  }
  // const { error: storageError } = await supabase.storage
  //   .from("cabin-images")
  //   .upload(imageName, newCabin.image);
  return data;
}
