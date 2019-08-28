import React from "react";
import "./Actors.css";
import { API_KEY } from "../Constants";

function Actors(props) {
  return (
    <div className="actors-category">
      ​<p className="introduction-actors">CAST</p>​
      {props.cast.length > 0 ? (
        <div className="actors-movie">
          {props.cast &&
            props.cast.map((actor, index) => {
              return (
                <div>
                  {actor.src ? (
                    <img src={actor.src} className="actor-image" />
                  ) : (
                    <img
                      className="no-image-actors"
                      src="https://dcassetcdn.com/common/images/v3/no-profile-pic-tiny.png"
                    />
                  )}
                  <p key={index} className="actor-name">
                    {actor.name}
                  </p>
                  <p key={index} className="actor-role">
                    {actor.character}
                  </p>
                </div>
              );
            })}
        </div>
      ) : (
        <p className="no-cast-info">No cast information avilable</p>
      )}
    </div>
  );
}

export default Actors;
