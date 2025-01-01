import { useContext } from 'react';
import { BlogsContext } from '../../context';
import Loading from '../Loading';
import EachBlog from './EachBlog';

const BlogCards = () => {
  const { blogs, loading, error } = useContext(BlogsContext);

  console.log(blogs);

  let content;

  if(loading) content = <Loading />

  if(!loading && error) content = {error};

  if(!loading && !error) {
    content = (
      blogs?.map(blog =>
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
    </div>
  );
}

export default BlogCards;