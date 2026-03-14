import React from "react";

function RecipeModal({ recipe, onClose }) {

  if (!recipe) return null;

  const nutrients = recipe.nutrients || {};

  return (
    <div className="modal-overlay">

      <div className="modal-container">

        <div className="modal-header">
          <h2>{recipe.title}</h2>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>

        <p className="recipe-description">{recipe.description}</p>

        <div className="recipe-meta">
          <span><b>Cuisine:</b> {recipe.cuisine}</span>
          <span><b>Total Time:</b> {recipe.total_time} mins</span>
          <span><b>Prep:</b> {recipe.prep_time} mins</span>
          <span><b>Cook:</b> {recipe.cook_time} mins</span>
          <span><b>Serves:</b> {recipe.serves}</span>
        </div>

        <div className="modal-grid">

          {/* Ingredients */}

          <div className="ingredients">
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients?.map((item, index) => (
                <li key={index}>✓ {item}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}

          <div className="instructions">
            <h3>Instructions</h3>
            <ol>
              {recipe.instructions?.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

        </div>

        {/* Nutrients */}

        <div className="nutrients">

          <h3>Nutritional Information</h3>

          <div className="nutrient-grid">

           <div className="nutrient-card">
  <span>Calories</span>
  <b>{nutrients.calories}</b>
</div>

<div className="nutrient-card">
  <span>Protein</span>
  <b>{nutrients.proteinContent}</b>
</div>

<div className="nutrient-card">
  <span>Fat</span>
  <b>{nutrients.fatContent}</b>
</div>

<div className="nutrient-card">
  <span>Carbs</span>
  <b>{nutrients.carbohydrateContent}</b>
</div>

          </div>

        </div>

        <div className="modal-footer">

          <a
            className="recipe-link"
            href={recipe.url}
            target="_blank"
            rel="noreferrer"
          >
            View Full Recipe
          </a>

        </div>

      </div>

    </div>
  );
}

export default RecipeModal;