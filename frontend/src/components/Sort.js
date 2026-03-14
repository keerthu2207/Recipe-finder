import React from "react";

function Sort({ sort, setSort }) {

  return (

    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
    >

      <option value="">Sort By</option>
      <option value="name">Recipe Name</option>
      <option value="rating">Rating</option>

    </select>

  );

}

export default Sort;