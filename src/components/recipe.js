import React from 'react';
import PropTypes from 'prop-types';

const Recipe = (props) => {
  const { title, image } = props;
  return (
    <div className="col-10 col-md-5 border border-primary m-3 rounded bg-light text-center">
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
