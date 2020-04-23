import React from "react";

import "./Card.css"
import StarsReview from "./StarsReview";

const Card = ({ name, address, imageUrl, imageAlt, phone, link, rating, reviewCount, isClosed }) => (
  <div className="col-md-6 col-lg-4 col-sm-12">
    <div className="card mt-2">
      <div className="image-wrapper">
        <img className="card-img-top img-fluid" src={imageUrl} alt={imageAlt} />
      </div>
      <div className="card-header">
        <div className="col-md-12 align-items-center">
          <div className="row justify-content-center">
            <h4 className="card-title">{name}</h4>
          </div>
        </div>
      </div>
      <div className="card-body">
        <ul className="list-group">
          <li className="list-group-item">
            <p className="card-text">Address: {address}</p>
          </li>
          <li className="list-group-item">
            <p className="card-text">Phone: {phone}</p>
          </li>
          <li className="list-group-item">
            <p className="card-text">Rating: <StarsReview score={rating} /></p>
          </li>
          <li className="list-group-item">
            <p className="card-text">Review Count: {reviewCount}</p>
          </li>
          <li className={`list-group-item ${isClosed ? "list-group-item-danger" : "list-group-item-success"}`}>
            <p className="card-text">{`Status: ${isClosed ? 'Closed' : 'Open'}`}</p>
          </li>
        </ul>
      </div>
      <div className="card-footer d-flex justify-content-center">
        <a className="card-link" href={link}>Website</a>
      </div>
    </div>
  </div>
);

// style={{ height: "auto" }}

export default Card;