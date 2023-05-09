import React from 'react'

const Recipe = ({recipes}) => {
  return (
    <div>
      {recipes.map((recipe)=>{
        return (
          <div key={recipe.id} className='d-flex justify-content-center text-center'>
            <div className='w-50 border border-primary my-3 rounded bg-light'>
              <h2 className='text-white bg-primary rounded-top p-2'>{recipe.title}</h2>
              <img className='my-2' src={recipe.image} alt={recipe.title} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Recipe
