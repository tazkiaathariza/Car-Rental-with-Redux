import React from "react";

const Card = (props) => {
  const { title, description, imgSrc } = props;

  return (
    <div className="col-lg-3">
        <div className="card">
        <div className="card-body">
            <a className="logoWhyUs"><img src={imgSrc}/></a>
            <h5 className="card-title"><b>{title}</b></h5>
            <p className="card-text">{description}</p>
        </div>
    </div>
    </div>
  )
}

export default Card;
