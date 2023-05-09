import React from 'react';
import PropTypes from 'prop-types';

const Recipe = (props) => {
  const { key, title, image } = props;
  return (
    <div key={key} className="d-flex justify-content-center text-center">
      <div className="w-50 border border-primary my-3 rounded bg-light">
        <h2 className="text-white bg-primary rounded-top p-2">{title}</h2>
        <img className="my-2" src={image} alt={title} />
      </div>
    </div>
  );
};

Recipe.propTypes = {
  key: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Recipe;
