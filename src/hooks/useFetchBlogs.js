import { useState, useEffect } from "react";
import { fetchBlogs } from "../api/api";

const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBlogs = async () => {
      setLoading(true);
      const { data, error } = await fetchBlogs();
      
      if (error) {
        setError(error);
      } else {
        setBlogs(data);
      }
      setLoading(false);
    };

    getBlogs();
  }, []);  

  return { blogs, loading, error };
};

export default useFetchBlogs;