import React , {useEffect, useState, } from 'react';
import './App.css';

import  SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';



const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    searchRecipes();
  }, []);

const searchRecipes = async () => {
  setIsLoading(true);
  const url = apiUrl + query;
  const res  = await fetch(url);
  const data = await res.json();
  setRecipes(data.meals);
  setIsLoading(false);

};



const handleSubmit = (event) => {
  event.preventDefault();
  console.log("clicked");
  searchRecipes();
};
  return (
    <div className="container" >
      <h2> Our Recipe App</h2>
      <SearchBar handleSubmit={handleSubmit} query={query} setQuery={setQuery} isLoading={isLoading} />
       
<div className="recipes">
  {recipes ? recipes.map(recipe => (
    <RecipeCard key={recipe.idMeal} recipe={recipe} />
  )
): "No recipes"}
    </div>
    </div>
  );
}

export default App;
