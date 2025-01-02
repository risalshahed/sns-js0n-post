import { useCallback, useContext, useEffect, useRef } from 'react';
import { BlogsContext } from '../../context';
import Loading from '../Loading';
import EachBlog from './EachBlog';

const BlogCards = () => {
  const { loading, error, loadMoreBlogs, filteredBlogs } = useContext(BlogsContext);
  // Stay in the last scrolled position
  const lastScrollPosition = useRef(0);

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Check if a user has scrolled to bottom
  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollHeight - scrollTop <= clientHeight + 50 && !loading) {
      lastScrollPosition.current = scrollTop;
      loadMoreBlogs();
    }
  }, [loading, loadMoreBlogs]);

  // Apply debounced scroll handler
  const debouncedScroll = useCallback(debounce(handleScroll, 300), [handleScroll]);

  useEffect(() => {
    window.addEventListener('scroll', debouncedScroll);
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, [debouncedScroll]);

  useEffect(() => {
    // Restore the scroll position after blogs are loaded
    if (!loading) {
      window.scrollTo({ top: lastScrollPosition.current, behavior: 'auto' });
    }
  }, [loading]);

  let content;

  if(loading && filteredBlogs.length === 0) content = <Loading />

  if(!loading && error) content = <p>{error}</p>;

  if(!loading && !error && filteredBlogs.length === 0) content = <p>No Blog found</p>
  
  if(!loading && !error && filteredBlogs.length > 0) {
    content = (
      filteredBlogs.map(blog =>
        <EachBlog
          key={blog.id}
          blog={blog}
        />
      )
    )
  }

  return (
    <div className='blog-cards'>
      {content}
      {loading && filteredBlogs.length > 0 && <Loading />}
    </div>
  );
}

export default BlogCards;