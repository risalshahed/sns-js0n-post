import { BlogsContext } from "../context";
import useFetchBlogs from "../hooks/useFetchBlogs";

const BlogsProvider = ({ children }) => {
  const { loading, error, loadMoreBlogs, filteredBlogs, searchQuery, setSearchQuery } = useFetchBlogs();

  return (
    <BlogsContext.Provider value={{ loading, error, loadMoreBlogs, filteredBlogs, searchQuery, setSearchQuery }}>
      { children }
    </BlogsContext.Provider>
  );
}

export default BlogsProvider;