import supabase from "../services/supabase";
import { useState, useEffect } from "react";

function useGetGames() {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("games").select("*");
      if (error) {
        console.error("Error fetching Games:", error.message);
        setError(error);
      } else {
        setData(data);
      }
    }

    fetchData();
  }, []);

  return [data, error];
}

export default useGetGames;
