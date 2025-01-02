import { useState, useEffect, useMemo } from "react";
import { fetchBlogs } from "../api/api";

const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // search query
  const filteredBlogs = useMemo(() => {
    return blogs?.filter(blog =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [blogs, searchQuery]);

  useEffect(() => {
    const getBlogs = async () => {
      setLoading(true);
      const { data, error } = await fetchBlogs(page);

      if (error) {
        setError(error);
      } else {
        // setBlogs(data);
        setBlogs(prev => [...prev, ...data]);
      }
      setLoading(false);
    };

    getBlogs();
  }, [page]);
  

  const loadMoreBlogs = () => {
    setPage(prev => prev + 1);
  }

  return { loading, error, loadMoreBlogs, filteredBlogs, searchQuery, setSearchQuery };
};

export default useFetchBlogs;