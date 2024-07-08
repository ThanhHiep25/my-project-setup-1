import React from "react";

function GroupItem() {
  return (
    <div className="container-group">
      <div className="fr-group">
        <p>Random list item order sale</p>
        <p>Flast sale</p>
      </div>

      <div>
        <p>Recomment for you !!</p>

        <div className="card-re">
          <p> new name product </p>
          <p> sale 10% </p>
          <p> price : $100 </p>
          <p> color : red </p>
          <button>Add to cart</button>
          <button>Buy now</button>
          <img src="https://via.placeholder.com/150" alt="g" />
        </div>

        <p>Top order !!</p>
      </div>
    </div>
  );
}

export default GroupItem;
