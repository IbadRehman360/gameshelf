import supabase from "../services/supabase";
import { useState, useEffect } from "react";

function useGetCategories() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("categories").select("*");
      if (error) {
        console.error("Error fetching categories:", error.message);
        setError(error);
      } else {
        setData(data);
      }
    }

    fetchData();
  }, []);

  return [data, error];
}

export default useGetCategories;
