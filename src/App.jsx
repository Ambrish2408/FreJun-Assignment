import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CommentsTable from "./components/CommentsTable";
import Pagination from "./components/Pagination";
import axios from "axios";

export default function App() {
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editedData, setEditedData] = useState({});
  const COMMENTS_PER_PAGE = 10;

  useEffect(() => {
    const fetchData = async () => {
      const commentsRes = await axios.get("https://jsonplaceholder.typicode.com/comments?_limit=100");
      const postsRes = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const postMap = {};
      postsRes.data.forEach((p) => (postMap[p.id] = p.title));
      const savedEdits = JSON.parse(localStorage.getItem("editedComments")) || {};
      setPosts(postMap);
      setComments(commentsRes.data);
      setEditedData(savedEdits);
    };
    fetchData();
  }, []);

  const handleEdit = (id, field, value) => {
    const updatedEdits = { ...editedData, [id]: { ...editedData[id], [field]: value } };
    setEditedData(updatedEdits);
    localStorage.setItem("editedComments", JSON.stringify(updatedEdits));
  };

  const mergedComments = comments.map((c) =>
    editedData[c.id] ? { ...c, ...editedData[c.id] } : c
  );

  const filtered = mergedComments.filter(
    (c) =>
      c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / COMMENTS_PER_PAGE);
  const startIdx = (currentPage - 1) * COMMENTS_PER_PAGE;
  const paginatedComments = filtered.slice(startIdx, startIdx + COMMENTS_PER_PAGE);

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container">
        <CommentsTable comments={paginatedComments} posts={posts} handleEdit={handleEdit} />
        <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
}
