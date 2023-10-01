import supabase from "../../services/supabase";

export default async function getItem(orderBy, orderDirection) {
  const { data: items, error } = await supabase
    .from("items")
    .select(
      `*,
          users (
            *
          )
        `
    )
    .order(orderBy, { ascending: orderDirection === "asc" });

  if (error) {
    console.error("Error fetching item:", error.message);
    throw new Error("Error fetching item: " + error.message);
  }
  if (items) {
    console.log(items);
  }
  return [items, error];
}
