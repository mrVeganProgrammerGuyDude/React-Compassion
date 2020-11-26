import React, { useEffect, useState } from 'react'; // This is for the recipe search
import Recipe from './Recipe'; // This is for the recipe search
import './App.css';
import LoginButton from './LoginButton';
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBar, Footer, Loading } from "./components";
import { Home, Profile, ExternalApi } from "./views";




const App = () => {

  const APP_ID = '6da5bdad';
  const APP_KEY = '97bfacae806c312c74be93803d963c42';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(''); // This updates every time the user puts any letters in
  const [query, setQuery] = useState('banana'); //this is designed to only run when the submit button is pressed 

  useEffect(() => { // This is a built in function in React that will run automatically when a condition is met.
    getRecipes();
  }, [query]) // this will change useEffect so it will only run when "query" is updated or changed. Leaving this empty will make it run only when the page loads



  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault(); //This stops the automatic page refresh
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <LoginButton/>
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button type="submit" className="search-button">Search button BABY</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}


export default App;
