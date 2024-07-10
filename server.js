import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: "*" }));

const books = [
  {
    id: "1",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publisher: "J. B. Lippincott & Co.",
    year: 1960,
    genre: "Novel",
  },
  {
    id: "2",
    title: "Nineteen Eighty-Four",
    author: "George Orwell",
    publisher: "Secker & Warburg",
    year: 1949,
    genre: "Dystopian fiction",
  },
  {
    id: "3",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publisher: "Charles Scribner's Sons",
    year: 1925,
    genre: "Novel",
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publisher: "T. Egerton, Whitehall",
    year: 1813,
    genre: "Novel",
  },
  {
    id: "5",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    publisher: "Bloomsbury",
    year: 1997,
    genre: "Fantasy",
  },
];

const PORT = 3000;

// get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// get book by id
app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const book = books.find((b) => b.id === id);
  if (!book) {
    res.status(404).json({ error: "Book not found" });
  } else {
    res.json(book);
  }
});

app.use(express.static("static"));

app.use((req, res, next) => {
  res.status(404).json({ message: "Book Api is at GET /books and individual book details at GET /books/:id" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});