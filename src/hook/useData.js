import { useState, useEffect } from "react";
// import axios from "axios";

// const client = axios.create({
//   baseURL: "https://wikideas-adriana75.vercel.app/api/v1/topics",
// });

export const useData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
};
