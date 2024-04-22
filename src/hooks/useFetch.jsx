import { useState, useEffect } from "react";

const useFetch = (url, options = {}) => {
  const [dataa, setdataa] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchdataa = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const jsondataa = await response.json();
      setdataa(jsondataa);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const postdata = async (postdata) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        ...options,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postdata),
      });
      const jsondataa = await response.json();
      setdataa(jsondataa);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchdataa(); // GET so'rovini yuborish
  }, []);

  return { dataa, loading, error, postdata };
};

export default useFetch;
