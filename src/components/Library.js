const Library = ({ books, setBooks }) => {
  const handleDelete = (book) => {
    const filteredBooks = books.filter((item) => {
      return item != book;
    });
    setBooks(filteredBooks);
  };
  const handleRead = (book) => {
    console.log(book);
    //change target book's read status return original book for others
    const newBooks = books.map((item) => {
      if (book === item) {
        return { ...book, isRead: false };
      } else {
        return item;
      }
    });
    setBooks(newBooks);
  };
  if (books.length === 0) {
    return (
      <div className="library">
        <p>Add Some Books</p>
      </div>
    );
  }
  return (
    <div className="library">
      <div className="books">
        {books.map((book, index) => {
          return (
            <article className="book" key={index}>
              <div className="info">
                <p className="name">{book.name}</p>
                <p className="details">
                  <span className="author"> by {book.author}</span>
                  <span className="pages">{book.pages} pages</span>
                </p>
              </div>
              <hr />
              <p className="read-display">
                {book.isRead ? "Already Read" : "Not Read Yet"}
              </p>
              <div className="button-container">
                <button
                  type="button"
                  className="delete"
                  onClick={() => handleDelete(book)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="read-status"
                  onClick={() => handleRead(book)}
                >
                  Not read
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
export default Library;
