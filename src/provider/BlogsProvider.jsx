import { BlogsContext } from "../context";
import useFetchBlogs from "../hooks/useFetchBlogs";

const BlogsProvider = ({ children }) => {
  const { blogs, loading, error } = useFetchBlogs();

  return (
    <BlogsContext.Provider value={{ blogs, loading, error }}>
      { children }
    </BlogsContext.Provider>
  );
}

export default BlogsProvider;