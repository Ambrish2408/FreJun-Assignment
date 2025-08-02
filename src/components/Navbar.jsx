import React from "react";

export default function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <nav>
      <h1 style={{ fontWeight: "bold" }}>Comments SPA</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </nav>
  );
}
