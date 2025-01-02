import { useParams } from "react-router-dom";
import useFetchBlog from "../../hooks/useFetchBlog";
import { formatDate } from "../../utils/formatDate";
import Calendar from "../SVGs/Calendar";
import Unrated from "../SVGs/Unrated";
import Rated from "../SVGs/Rated";

function getIcons(commentsCount) {
  const maxIcons = 5;
  const count = Math.min(Math.ceil(commentsCount / 8), maxIcons);

  let icons = [];
  for (let i = 0; i < count; i++) {
    icons.push(<Rated key={`rated-${i}`} />);
  }
  for (let i = 0; i < maxIcons - count; i++) {
    icons.push(<Unrated key={`unrated-${i}`} />);
  }

  return icons;
}

const BlogDetails = () => {
  const { id } = useParams();

  const { blog, loading, error } = useFetchBlog(id);

  const formattedDate = formatDate(blog?.created_at);

  return (
    <div className='blog-details-top'>
      <div className='blog-details'>
        <div>
          <img className='blog-details-img' src={blog?.cover_image} alt={blog?.title} />
        </div>
        {/* Title & Description div */}
        <div>
          <div className='detail-title'>
            <div>
              <h4>
                {blog?.title}
              </h4>
              <div className='detail-date'>
                <Calendar />
                {formattedDate}
              </div>
            </div>
            <div>
              <button>
                {blog?.user.name}
              </button>
            </div>
          </div>
          
          <p>
            {blog?.description}
          </p>
        </div>
      </div>
      
      {/* Reviews */}
      <div className='blog-details-top'>
        <h4>
          Latest Reviews
        </h4>
        <div className='reviews'>
          {
            blog?.tags?.map((tag, index) =>
              <div className='each-review' key={index}>
                <p>
                  {getIcons(blog?.comments_count)}
                </p>

                <h6>{tag}</h6>
                <p>{blog?.description}</p>
                <div className='review-user'>
                  <img src={blog?.user.profile_image} alt={blog?.user.name} />
                  <div>
                    <p>
                      <strong>{blog?.user.name}</strong>
                    </p>
                    <p>{formattedDate}</p>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>

      {/* Subscription */}
      <div className='blog-details-top subscription'>
        <div>
          <h5>Follow the latest trends</h5>
          <p>With our daily newsletter</p>
        </div>
        <div>
          <input type='email' placeholder='you@example.com' />
          <button>Submit</button>
        </div>
      </div>

    </div>
  );
}

export default BlogDetails;