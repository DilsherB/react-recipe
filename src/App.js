import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const apiKey = "4beac98980dc421e940d8dbca15cb860";
  const url = `https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=${apiKey}`;

  const [recipes, setRecipes] = useState([])
  useEffect(()=>{
    getRecipes();
  },[]);
  
  const getRecipes = async () => {
    const Response = await fetch(url);
    const data = await Response.json();
    setRecipes(data.products);
  }
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
