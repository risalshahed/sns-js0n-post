import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import { truncateDescription } from "../../utils/truncateDescription";
import Calendar from "../SVGs/Calendar";

const EachBlog = ({ blog }) => {
  const { cover_image, social_image, created_at, title, description, user } = blog;

  const formattedDate = formatDate(created_at);

  const truncatedText = truncateDescription(description);

  return (
    <div className='each-blog'>
      <div>
        <img className='each-blog-img' src={cover_image} alt={title} />
      </div>
      {/* <p>
        {Math.ceil(comments_count / 8)}
      </p> */}
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
        {truncatedText} <Link>Read More</Link>
      </p>
    </div>
  );
}

export default EachBlog;