import React from "react";
import usePagination from "../../hooks/usePagination";

const Pagination = ({ onChangePage, limit, total, defaultParams = {} }) => {
  const { first, last, next, prev, currentPage, maxPage } = usePagination(total, limit, onChange);

  function updateParams(param, value, prevParams = {}) {
    return {
      ...prevParams,
      [param]: value
    } 
  }

  function onChange(offset) {
    let params = updateParams("offset", offset, defaultParams);
    onChangePage(params);
  }



  return (
    <nav aria-label="page navigation" className="mt-5 mb-5">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button className="page-link" value={1} name="first" onClick={first} tabIndex="-1">First</button>
        </li>
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button className="page-link" name="previous" onClick={prev} tabIndex="-1">Previous</button>
        </li>
        
        <li className={`page-item ${currentPage === maxPage ? "disabled" : ""}`}>
          <button className="page-link" name="next" onClick={next}>Next</button>
        </li>
        <li className={`page-item ${currentPage === maxPage ? "disabled" : ""}`}>
          <button className="page-link" value={maxPage} name="last" onClick={last}>Last</button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination;