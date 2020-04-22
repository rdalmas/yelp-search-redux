import { useState, useEffect } from 'react';

/*
  How to use: Call this hook and pass it the total items, 
  the items per page and a callback to be called whenever
  the page changes returning the calculated offset.
*/
function usePagination(total, itemsPerPage, onChangePage) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(total / itemsPerPage);

  useEffect(() => {
    scrollTop();
  }, [currentPage]);

  function scrollTop() {
    window.scrollTo(0, 0);
  }

  function calculateOffSet(page) {
    if (page === 1) {
      return 0;
    } else {
      return ((page - 1) * itemsPerPage) + 1;
    }  
  }

  function first() {
    setCurrentPage(1);
    onChangePage(0);
  }

  function last() {
    setCurrentPage(maxPage);
    onChangePage(calculateOffSet(maxPage));
  }

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    onChangePage(calculateOffSet(Math.min(currentPage + 1, maxPage)));
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    onChangePage(calculateOffSet(Math.max(currentPage - 1, 1)));
  }

 return { first, last, next, prev, currentPage, maxPage };
}

export default usePagination;
