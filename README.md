# Comments SPA (React)

This project is a **Single Page Application (SPA)** built using **React + Vite**, fulfilling all assignment requirements.

---

## ✅ Features Implemented
### Sub-task 1:
✔ Paginated table of comments (10 per page)  
✔ Navbar with search input

### Sub-task 2:
✔ Table columns: **Email | Name | Body | Post**  
✔ Fetches comments and posts from JSONPlaceholder API

### Sub-task 3:
✔ Search functionality (filters by email, name, or body)

### Bonus Sub-task 4:
✔ In-place editing of **Name** and **Body** (double-click to edit)

### Bonus Sub-task 5:
✔ Edits persist after page refresh using **localStorage**

---

## 🚀 How to Run Locally
```sh
npm install
npm run dev
```
Then open the URL shown in the terminal (usually http://localhost:5173/).

---

## 📂 Project Structure
```
comments-spa
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── CommentsTable.jsx
│   │   └── Pagination.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

---

## 📌 API Used
- [Comments API](https://jsonplaceholder.typicode.com/comments)
- [Posts API](https://jsonplaceholder.typicode.com/posts)
