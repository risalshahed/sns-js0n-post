import { useParams } from "react-router-dom";
import useFetchBlog from "../../hooks/useFetchBlog";
import { formatDate } from "../../utils/formatDate";
import Calendar from "../SVGs/Calendar";

const BlogDetails = () => {
  const { id } = useParams();

  const { blog, loading, error } = useFetchBlog(id);

  const formattedDate = formatDate(blog?.created_at);

  console.log(blog);

  return (
    <div className='blog-details'>
      <div>
        <img className='blog-details-img' src={blog?.cover_image} alt={blog?.title} />
      </div>
      {/* <p>
        {Math.ceil(comments_count / 8)}
      </p> */}
      <div>
        <div className='date-user'>
          <p>
            <div>
              <Calendar />
            </div>
            <div>
              {blog?.formattedDate}
            </div>
          </p>
          <p>
            {blog?.user.name}
          </p>
        </div>
        <h2>
          {blog?.title}
        </h2>
        <p>
          {blog?.description}
        </p>
      </div>
    </div>
  );
}

export default BlogDetails;