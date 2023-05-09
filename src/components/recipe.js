import React from 'react'

const Recipe = ({recipes}) => {
  return (
    <div>
      {recipes.map((recipe)=>{
        return (
          <div key={recipe.id} className=''>
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title}/>
          </div>
        )
      })}
    </div>
  )
}

export default Recipe
