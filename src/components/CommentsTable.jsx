import React, { useState } from "react";

export default function CommentsTable({ comments, posts, handleEdit }) {
  const [editing, setEditing] = useState({});

  const startEdit = (id, field, value) => {
    setEditing({ id, field, value });
  };

  const saveEdit = () => {
    handleEdit(editing.id, editing.field, editing.value);
    setEditing({});
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Email</th>
          <th>Name</th>
          <th>Body</th>
          <th>Post</th>
        </tr>
      </thead>
      <tbody>
        {comments.map((c) => (
          <tr key={c.id}>
            <td>{c.email}</td>
            <td onDoubleClick={() => startEdit(c.id, "name", c.name)}>
              {editing.id === c.id && editing.field === "name" ? (
                <input
                  value={editing.value}
                  onChange={(e) => setEditing({ ...editing, value: e.target.value })}
                  onBlur={saveEdit}
                  autoFocus
                />
              ) : (
                c.name
              )}
            </td>
            <td onDoubleClick={() => startEdit(c.id, "body", c.body)}>
              {editing.id === c.id && editing.field === "body" ? (
                <textarea
                  value={editing.value}
                  onChange={(e) => setEditing({ ...editing, value: e.target.value })}
                  onBlur={saveEdit}
                  autoFocus
                />
              ) : (
                c.body
              )}
            </td>
            <td>{posts[c.postId]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
