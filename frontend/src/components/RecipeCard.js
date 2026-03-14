import React from "react";

function RecipeCard({ recipe }) {

  const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= Math.round(rating) ? "star filled" : "star"}>
          ★
        </span>
      );
    }

    return stars;
  };

  return (

    <div className="card">

      <h3>{recipe.title}</h3>

      <p><b>Cuisine:</b> {recipe.cuisine}</p>

      <p className="rating">
        {renderStars(recipe.rating)}
      </p>

      <p className="ingredients-text">
        <b>Ingredients:</b> {recipe.ingredients?.slice(0,5).join(", ")}
      </p>

      <p><b>Total Time:</b> {recipe.total_time} mins</p>

    </div>

  );
}

export default RecipeCard;