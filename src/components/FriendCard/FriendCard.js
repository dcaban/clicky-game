import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div onClick={() => props.alreadyPlayed(props.id)} className="z-depth-0 card col s6  m4 l3">
      <div className="fadehelper"> </div>
    <div className="img-container">
      <img className="hoverable z-depth-4" alt={props.name} src={props.image} width="183" height="183"/>
    </div>

  </div>
);

export default FriendCard;
