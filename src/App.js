import { useEffect, useState } from 'react';
import './App.css';
import Recipe from './components/recipe';

function App() {
  
  const [recipes, setRecipes] = useState([])
  useEffect(()=>{
    getRecipes();
  },[]);
  
  const getRecipes = async () => {
    const apiKey = "4beac98980dc421e940d8dbca15cb860";
    const Response = await fetch(`https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=${apiKey}`);
    const data = await Response.json();
    setRecipes(data.products);
  }
  console.log(recipes)
  return (
    <div className="App">
      <Recipe />
    </div>
  );
}

export default App;
