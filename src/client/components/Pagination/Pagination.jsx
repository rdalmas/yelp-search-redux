import React, { useEffect } from "react";

const Pagination = ({ onChange, limit, total }) => {
  const [currPage, setCurrPage] = useState(1);
  const setPage = (e) => {

  }
  useEffect(() => {
    onChange({ offSet:  })
  }, [currPage])
  return (
    <nav aria-label="page navigation">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currPage === 1 ? "disabled" : ""}`}>
          <a className="page-link" name="offset" href="#" tabindex="-1">First</a>
        </li>
        <li className={`page-item ${currPage === 1 ? "disabled" : ""}`}>
          <a className="page-link" onClick={} href="#" tabindex="-1">Previous</a>
        </li>
        <li className="page-item"><a name="offset" className="page-link" href="#">{currPage}</a></li>
        <li className="page-item"><a name="offset" className="page-link" href="#">{currPage + 1}</a></li>
        <li className="page-item"><a name="offset" className="page-link" href="#">{currPage + 2}</a></li>
        <li className="page-item">
          <a className="page-link" name="offset" href="#">Next</a>
        </li>
        <li className="page-item">
          <a className="page-link" name="offset" href="#">Last</a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination;