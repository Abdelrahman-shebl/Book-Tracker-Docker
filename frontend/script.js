const API_URL = "http://localhost:5000/books"; // Update if your backend URL is different

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("book-form");
  const bookList = document.getElementById("book-list");

  const fetchBooks = async () => {
    try {
      const res = await fetch(API_URL);
      const books = await res.json();

      bookList.innerHTML = "";
      books.forEach((book) => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = `${book.title} by ${book.author}`;
        bookList.appendChild(li);
      });
    } catch (err) {
      console.error("Failed to load books", err);
    }
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = form.title.value.trim();
    const author = form.author.value.trim();

    if (!title || !author) return;

    try {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author }),
      });

      form.reset();
      fetchBooks(); // reload list
    } catch (err) {
      console.error("Failed to add book", err);
    }
  });

  fetchBooks();
});
