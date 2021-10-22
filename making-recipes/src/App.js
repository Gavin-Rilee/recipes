import './App.css';
import React, { useEffect,useState } from 'react';
import Recipe from './Recipe';


function App() {

  const APP_ID = '6a82bf5a'
  const APP_KEY = '41c824e6c0e2508b4cf5a44926fa0205'

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes();
  }, [])

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data =await response.json();
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button"type="submit">Search</button>
        
      </form>
        {recipes.map(recipe => (
          <Recipe/>
        ))}
    </div>
  );
}

export default App;
