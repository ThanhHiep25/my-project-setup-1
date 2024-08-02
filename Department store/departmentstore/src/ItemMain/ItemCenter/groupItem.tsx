import React from "react";

import "./Css/group.css";

function GroupItem() {
  return (
    <div className="container-group">
      <div className="fr-group">
        <p className="title-sale">Random list item order sale</p>
        <p className="title-sale">Flast sale</p>
      </div>

      <div>
        <p className="title-sale">Recomment for you !!</p>
        <button className="btn-group-sale-cont">Xem thêm - - &gt; &gt;</button>
        <div className="card-re">
          <div>
            <img
              className="img-pic"
              src="https://via.placeholder.com/150"
              alt="eeee"
            />
          </div>

          <div className="card-re-1">
            <p> new name product </p>
            <p> price : $100 </p>
            <p> sale 10% </p>
          </div>
        </div>
        <p className="title-sale">
          Top order !!
          <img src="fire" height="200px" alt="fire" />
        </p>
      </div>
    </div>
  );
}

export default GroupItem;
