import React, { useState } from 'react';
const PaginationExample = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

 // Calculate the total number of pages
  const totalPages = Math.ceil(items.length / itemsPerPage)

  // Get the items for the current page
  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div>
      {/* Display the current items */}
      {currentItems.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      {/* Pagination controls */}
      <div>
        {/* Previous Page Button */}
        {currentPage > 1 && (
          <button onClick={() => setCurrentPage(currentPage - 1)}>
            Previous
          </button>
        )}
        {/* Next Page Button */}
        {currentPage < totalPages && (
          <button onClick={() => setCurrentPage(currentPage + 1)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};
export default PaginationExample;   