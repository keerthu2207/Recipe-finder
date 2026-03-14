// import React, { useState } from "react";
// import recipesData from "./data/recipes.json";
// import SearchBar from "./components/SearchBar";
// import Filter from "./components/Filter";
// import Sort from "./components/Sort";
// import RecipeCard from "./components/RecipeCard";
// import Pagination from "./components/Pagination";

// import "./App.css";

// function App() {

//   const recipesArray = Object.values(recipesData || {});

//   const [search, setSearch] = useState("");
//   const [cuisine, setCuisine] = useState("All");
//   const [sort, setSort] = useState("");
//   const [page, setPage] = useState(1);

//   const itemsPerPage = 15;

//   let filteredRecipes = recipesArray
//     .filter(recipe =>
//       recipe?.title?.toLowerCase().includes(search.toLowerCase())
//     )
//     .filter(recipe =>
//       cuisine === "All" || recipe?.cuisine === cuisine
//     );

//   if (sort === "name") {
//     filteredRecipes.sort((a, b) =>
//       (a.title || "").localeCompare(b.title || "")
//     );
//   }

//   if (sort === "rating") {
//     filteredRecipes.sort((a, b) =>
//       (b.rating || 0) - (a.rating || 0)
//     );
//   }

//   const start = (page - 1) * itemsPerPage;

//   const paginatedRecipes = filteredRecipes.slice(
//     start,
//     start + itemsPerPage
//   );

//   const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);

//   return (
//     <div className="App">

//       <h1>Recipe Explorer 🍳</h1>

//       <SearchBar
//         search={search}
//         setSearch={(value) => {
//           setSearch(value);
//           setPage(1);
//         }}
//       />

//       <Filter
//         recipes={recipesArray}
//         cuisine={cuisine}
//         setCuisine={(value) => {
//           setCuisine(value);
//           setPage(1);
//         }}
//       />

//       <Sort sort={sort} setSort={setSort} />

//       <div className="recipe-grid">
//         {paginatedRecipes.map((recipe, index) => (
//           <RecipeCard key={index} recipe={recipe} />
//         ))}
//       </div>

//       <Pagination
//         page={page}
//         totalPages={totalPages}
//         setPage={setPage}
//       />

//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import RecipeCard from "./components/RecipeCard";
import Pagination from "./components/Pagination";
import RecipeModal from "./components/RecipeModal";

import "./App.css";

function App() {

  const [recipesArray, setRecipesArray] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const [search, setSearch] = useState("");
  const [cuisine, setCuisine] = useState("All");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);

  const itemsPerPage = 15;

  /* Fetch recipes from Django API */

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/recipes/")
      .then((res) => {
        setRecipesArray(res.data);
      })
      .catch((err) => {
        console.log("Error fetching recipes:", err);
      });
  }, []);

  /* Filtering */

  let filteredRecipes = recipesArray
    .filter((recipe) =>
      recipe?.title?.toLowerCase().includes(search.toLowerCase())
    )
    .filter((recipe) =>
      cuisine === "All" || recipe?.cuisine === cuisine
    );

  /* Sorting */

  if (sort === "name") {
    filteredRecipes.sort((a, b) =>
      (a.title || "").localeCompare(b.title || "")
    );
  }

  if (sort === "rating") {
    filteredRecipes.sort((a, b) =>
      (b.rating || 0) - (a.rating || 0)
    );
  }


  /* Pagination */

  const start = (page - 1) * itemsPerPage;

  const paginatedRecipes = filteredRecipes.slice(
    start,
    start + itemsPerPage
  );

  const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);

  return (
    <div className="App">

      <h1>Recipe Explorer 🍳</h1>

      <SearchBar
        search={search}
        setSearch={(value) => {
          setSearch(value);
          setPage(1);
        }}
      />

      <Filter
        recipes={recipesArray}
        cuisine={cuisine}
        setCuisine={(value) => {
          setCuisine(value);
          setPage(1);
        }}
      />

      <Sort sort={sort} setSort={setSort} />

      {/* Recipe Cards */}

      <div className="recipe-grid">

        {paginatedRecipes.map((recipe, index) => (

          <div
            key={index}
            onClick={() => setSelectedRecipe(recipe)}
            style={{ cursor: "pointer" }}
          >
            <RecipeCard recipe={recipe} />
          </div>

        ))}

      </div>

      {/* Pagination */}

      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />

      {/* Recipe Details Modal */}

      {selectedRecipe && (

        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />

      )}

    </div>
  );
}

export default App;