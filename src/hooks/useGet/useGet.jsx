import axios from "axios";
import { useEffect, useState } from "react";

export const useGet = (url) => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(baseURL + url);
      setData(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data };
};
