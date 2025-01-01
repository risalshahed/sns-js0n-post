import { useState, useEffect } from "react";
import { fetchBlogById } from "../api/api";

const useFetchBlog = _id => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBlog = async () => {
      setLoading(true);
      const { data, error } = await fetchBlogById(_id);
      if (error) {
        setError(error);
      } else {
        setBlog(data);
      }
      setLoading(false);
    };

    if (_id) {
      getBlog();
    }
  }, [_id]);

  return { blog, loading, error };
};

export default useFetchBlog;