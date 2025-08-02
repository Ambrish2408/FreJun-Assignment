import React from "react";

export default function Pagination({ currentPage, totalPages, setCurrentPage }) {
  return (
    <div style={{ textAlign: "center", marginTop: "15px" }}>
      <button disabled={currentPage === 1} onClick={() => setCurrentPage((p) => p - 1)}>
        Previous
      </button>
      <span style={{ margin: "0 10px" }}>
        Page {currentPage} of {totalPages}
      </span>
      <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((p) => p + 1)}>
        Next
      </button>
    </div>
  );
}
