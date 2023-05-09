import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ recipes }) => (
  <div>
    {recipes.map((recipe) => (
      <div key={recipe.id} className="d-flex justify-content-center text-center">
        <div className="w-50 border border-primary my-3 rounded bg-light">
          <h2 className="text-white bg-primary rounded-top p-2">{recipe.title}</h2>
          <img className="my-2" src={recipe.image} alt={recipe.title} />
        </div>
      </div>
    ))}
  </div>
);

Recipe.propTypes = {
  recipes: PropTypes.string.isRequired,
};

export default Recipe;
