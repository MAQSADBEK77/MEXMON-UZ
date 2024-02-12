import { useState, useEffect } from "react";

export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [postData, setPostData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const postGetData = (data) => {
    if (method == "POST") {
      const config = {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      setPostData(config);
    } else if (method == "DELETE") {
      const config = {
        method: method,
      };
      setDeleteData(config);
    }
  };
  useEffect(() => {
    const getData = async (fetchConfig) => {
      setIsPending(true);
      try {
        const req = await fetch(url, { ...fetchConfig });
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setIsPending(false);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError(err.message);
        console.log(err.message);
      }
    };
    if (method == "GET") {
      getData();
    }
    if (method == "POST" && postData) {
      getData(postData);
    }
    if (method == "DELETE") {
      getData();
    }
    getData(deleteData);
  }, [url, method, postData]);
  return { data, isPending, error, postGetData };
};
