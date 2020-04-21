import React from "react";

const ShowResults = ({ results }) => (
  <>
    {results && results.map(result => (
      <div key={result.id}>{result.id}</div>
    ))}
  </>
);

export default ShowResults;