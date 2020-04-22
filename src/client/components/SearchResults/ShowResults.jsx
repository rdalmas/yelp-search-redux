import React from "react";

import "./ShowResults.css"

const ShowResults = ({ results }) => (
  <div className="row">
    {results && results.map(result => (
      <div key={result.id} className="col-md-12 col-lg-3 col-sm-12">
        <div className="card mt-3" style={{ height: "15rem" }}>
          <div className="image-wrapper">
            <img className="card-img-top img-fluid" src={result.imageUrl} alt={result.imageAlt} />
          </div>
          <div className="card-body">
            <p className="card-title">{result.name}</p>
            <p className="card-text">{result.address}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ShowResults;