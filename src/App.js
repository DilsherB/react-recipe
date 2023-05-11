import { useEffect, useState } from "react";
import { MdSearch } from 'react-icons/md';
import Recipe from "./components/recipe";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("chocolate");

  const getRecipes = async () => {
    const apiKey = "4beac98980dc421e940d8dbca15cb860";
    const Response = await fetch(
      `https://api.spoonacular.com/food/products/search?query=${
        !search ? "chocolate" : keyword
      }&apiKey=${apiKey}`
    );
    const data = await Response.json();
    setRecipes(data.products);
  };
  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setKeyword(search);
  };
  return (
    <div className="App">
      <form
        onSubmit={getSearch}
        className="d-flex justify-content-center m-3 form-group"
      >
        <input
          className="from-control col-md-4 col-8"
          type="text"
          value={search}
          onChange={handleSearch}
        />
        <button className="btn btn-primary" type="submit">
          Search <MdSearch />
        </button>
      </form>
      {recipes.map((recipe) => (
        <div key={recipe.key} className="d-flex justify-content-around text-center">
          <Recipe title={recipe.title} image={recipe.image} />
        </div>
      ))}
    </div>
  );
}

export default App;
