import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import { truncateDescription } from "../../utils/truncateDescription";
import Calendar from "../SVGs/Calendar";

const EachBlog = ({ blog }) => {
  const { id, cover_image, social_image, created_at, title, description, user } = blog;
  // Format Date
  const formattedDate = formatDate(created_at);
  // Truncate Description
  const truncatedText = truncateDescription(description);

  return (
    <div className='each-blog'>
      <div>
        <img className='each-blog-img' src={cover_image} alt={title} />
      </div>
      <div className='date-user'>
        <p>
          <div>
            <Calendar />
          </div>
          <div>
            {formattedDate}
          </div>
        </p>
        <p>
          {user.name}
        </p>
      </div>
      <h2>
        {title}
      </h2>
      <p>
        {truncatedText} <Link to={`/blog/${id}`}>Read More</Link>
      </p>
    </div>
  );
}

export default EachBlog;