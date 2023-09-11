import supabase from "../../services/supabase";
import { useState, useEffect } from "react";

function useGetItem(orderBy, orderDirection) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
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
        setError(error);
      } else {
        setData(data);
      }
    }

    fetchData();
  }, [orderBy, orderDirection]);

  return [data, error];
}

export default useGetItem;
