import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { db } from '../services/db';


const BlogPost = ({ id, heading, previewTxt, timestamp, image }) => {
  function handleDeleteStory() {
    db.posts
      .delete(id)
      .then(function (deleteCount) {
        console.log( `Deleted ${deleteCount} objects`);
      });
  }

  const datetime = new Date(Number(timestamp));
  const date = datetime.toLocaleString('en-us', { day: 'numeric', month: 'long' });

  return (
    <section className="card mb-3">
      { image && (<img className="card-img-top" src={image} alt="Card cap" />) }
      <div className="card-body">
        <h3 className="card-title">
          <Link to={`/posts/${id}`} className="">{heading}</Link>
        </h3>
        <p className="card-text">{previewTxt}</p>
        <p className="card-text">
          <small className="text-muted">{date}</small>
        </p>
      </div>
      <div className="card-footer">
        <div className="btn-group" role="group">
          <Link
            to={`posts/${id}/edit`}
            className="btn btn-default"
            title="Edit post"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
              <title>Pencil</title>
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>
          </Link>
          <button
            className="btn btn-default"
            title="Remove post"
            type="button"
            onClick={handleDeleteStory}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
              <title>Trash can</title>
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

BlogPost.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string,
  heading: PropTypes.string.isRequired,
  previewTxt: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

BlogPost.defaultProps = {
  image: '',
};

export default BlogPost;
