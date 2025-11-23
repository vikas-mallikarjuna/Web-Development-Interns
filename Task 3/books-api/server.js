const express = require("express");
const app = express();

app.use(express.json()); // To parse JSON request body

// In-memory array to store books
let books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 2, title: "Atomic Habits", author: "James Clear" }
];

// ============= GET ALL BOOKS =============
app.get("/books", (req, res) => {
  res.json(books);
});

// ============= ADD NEW BOOK =============
app.post("/books", (req, res) => {
  const { title, author } = req.body;

  const newBook = {
    id: books.length + 1,
    title,
    author
  };

  books.push(newBook);
  res.status(201).json({ message: "Book added successfully", book: newBook });
});

// ============= UPDATE BOOK BY ID =============
app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  book.title = title || book.title;
  book.author = author || book.author;

  res.json({ message: "Book updated successfully", book });
});

// ============= DELETE BOOK BY ID =============
app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  const deletedBook = books.splice(index, 1);
  res.json({ message: "Book deleted", deletedBook });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
