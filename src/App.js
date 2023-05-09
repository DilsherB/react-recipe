import { useEffect, useState } from 'react';
import Recipe from './components/recipe';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const apiKey = '4beac98980dc421e940d8dbca15cb860';
    const Response = await fetch(`https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=${apiKey}`);
    const data = await Response.json();
    setRecipes(data.products);
  };
  useEffect(() => {
    getRecipes();
  }, []);
  return (
    <div className="App">
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} title={recipe.title} image={recipe.image} />
      ))}
    </div>
  );
}

export default App;
