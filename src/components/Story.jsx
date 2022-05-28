import PropTypes from 'prop-types';
import { db } from '../services/db';


const StoriesFeed = ({ id, heading, timestamp, image, body }) => {
  function handleDeleteStory() {
    db.posts
      .where('id').equals(id)
      .delete()
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
          <a className="h3__link" href="#link">{heading}</a>
        </h3>
        <p className="card-text">{body}</p>
        <p className="card-text">
          <small className="text-muted">{date}</small>
        </p>
        <button
          className="btn btn-default remove-post"
          title="Remove post"
          type="button"
          onClick={handleDeleteStory}
        >
          <svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
            <title>trashcan</title>
            <path
              d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"
              fill="#000"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

StoriesFeed.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  heading: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

StoriesFeed.defaultProps = {
  image: '',
};

export default StoriesFeed;
