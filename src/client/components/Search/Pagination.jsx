import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { getPaginationData } from "../../redux/selectors/pagination";

const Pagination = ({ onChangePage, currentOffset, onSubmit }) => {
  const { total, limit } = useSelector(getPaginationData);  
  const maxOffset = Math.min(total - limit, 1000 - limit); //currently yelp only returns offsets until 1000

  useEffect(() => {
    scrollTop();
  }, [currentOffset]);

  function scrollTop() {
    window.scrollTo(0, 0);
  }

  function first() {
    onChangePage("offset", 0);
    onSubmit("offset", 0);
  }

  function last() {
    onChangePage("offset", maxOffset);
    onSubmit("offset", maxOffset);
  }

  function next() {
    onChangePage("offset", currentOffset + limit);
    onSubmit("offset", currentOffset + limit);
  }

  function prev() {
    onChangePage("offset", currentOffset - limit);
    onSubmit("offset", currentOffset - limit);
  }
  
  return (
    <nav aria-label="page navigation" className="mt-5 mb-5">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentOffset === 0 ? "disabled" : ""}`}>
          <button className="page-link" name="first" onClick={first} tabIndex="-1">First</button>
        </li>
        <li className={`page-item ${currentOffset === 0 ? "disabled" : ""}`}>
          <button className="page-link" name="previous" onClick={prev} tabIndex="-1">Previous</button>
        </li>
        
        <li className={`page-item ${currentOffset === maxOffset ? "disabled" : ""}`}>
          <button className="page-link" name="next" onClick={next}>Next</button>
        </li>
        <li className={`page-item ${currentOffset === maxOffset ? "disabled" : ""}`}>
          <button className="page-link" name="last" onClick={last}>Last</button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination;