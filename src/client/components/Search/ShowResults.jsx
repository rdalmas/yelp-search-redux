import React from "react";

import "./ShowResults.css"
import Card from "../Cards/Card";

const ShowResults = ({ results }) => (
  <div className="card-group mt-5">
    {results && results.map(result => (
      <Card 
        key={result.id}
        name={result.name}
        address={result.address}
        imageUrl={result.imageUrl}
        imageAlt={result.imageAlt}
        phone={result.phone}
        link={result.url}
        rating={result.rating}
        reviewCount={result.reviewCount}
        isClosed={result.isClosed}
      />
    ))}
  </div>
);

export default ShowResults;