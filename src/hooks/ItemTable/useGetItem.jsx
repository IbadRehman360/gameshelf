import supabase from "../../services/supabase";
import { useState, useEffect } from "react";

function useGetItem() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("items").select("*");
      if (error) {
        console.error("Error fetching item:", error.message);
        setError(error);
      } else {
        setData(data);
      }
    }

    fetchData();
  }, []);

  return [data, error];
}

export default useGetItem;
