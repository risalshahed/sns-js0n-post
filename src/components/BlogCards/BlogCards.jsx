import { useContext } from 'react';
import { BlogsContext } from '../../context';

const BlogCards = () => {
  const { blogs, loading, error } = useContext(BlogsContext);

  // console.log(blogs);

  return (
    <div>
      {/* {
        blogs.map(b => <p>{b.title}</p>)
      } */}
      Blogs Card
    </div>
  );
}

export default BlogCards;