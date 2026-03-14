import React from "react";

function Filter({ recipes, cuisine, setCuisine }) {

  const cuisines = [
    "All",
    ...new Set(recipes.map(r => r?.cuisine).filter(Boolean))
  ];

  return (

    <select
      value={cuisine}
      onChange={(e) => setCuisine(e.target.value)}
    >

      {cuisines.map((c, index) => (
        <option key={index} value={c}>
          {c}
        </option>
      ))}

    </select>

  );

}

export default Filter;