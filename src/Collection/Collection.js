import React from "react";
import "./Collection.css";

function Collection() {
  return (
    <div className="collection-representation">
      <div className="collection">
        <div className="card">
          <img src="https://i.pinimg.com/originals/78/1b/e6/781be6cd01b8cb5736a7c8d8e5465f28.jpg" />
          <h4>title </h4>
          <p>description </p>
        </div>

        <div className="card">
          <img src="http://images6.fanpop.com/image/photos/41400000/c-mon-give-us-a-wink-cute-kittens-41404264-256-256.jpg" />
          <h4>title</h4>
          <p>description</p>
        </div>

        <div className="card">
          <img src="https://catalystcouncil.files.wordpress.com/2015/05/8718620825_99276d6dca_k.jpg?w=256&h=256&crop=1" />
          <h4>title</h4>
          <p>description</p>
        </div>

        <div className="card">
          <img src="https://cdn140.picsart.com/297790195306201.jpg?c256x256 " />
          <h4>title</h4>
          <p>description</p>
        </div>
      </div>
    </div>
  );
}
export default Collection;
