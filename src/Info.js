import React from "react";

function InfoCard(props) {
  return (
    <div>
      <figure>
        <img src={props.info.imgSrc} alt="" />
      </figure>
      <h2>{props.info.name}</h2>
      <p>
        {props.info.profession}
      </p>
      <p>
        {props.info.address}
      </p>
      <p>
         {props.info.phone}
      </p>
      <p>
        {props.info.email}
      </p>
      <hr />
      <p>{props.info.about}</p> <hr />
    </div>
  );
}

export default InfoCard;