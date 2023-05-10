import React from 'react';
import PropTypes from 'prop-types';

const Recipe = (props) => {
  const { title, image } = props;
  return (
    <div className="w-50 border border-primary my-3 rounded bg-light">
      <h2 className="text-white bg-primary rounded-top p-2">{title}</h2>
      <img className="m-2 image" src={image} alt={title} />
    </div>
  );
};

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Recipe;
