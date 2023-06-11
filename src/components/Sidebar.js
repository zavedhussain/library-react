const Sidebar = ({ books, setBooks }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const name = document.querySelector("#name").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const isRead = document.querySelector("#read").checked;

    const newBook = { name, author, pages, isRead };
    console.log(newBook);
    setBooks([...books, newBook]);
  };
  return (
    <div className="sidebar">
      <div className="title">
        <p>Add a new Book</p>
      </div>
      <form className="book-form" onSubmit={handleSubmit}>
        <div className="book-inputs">
          <div className="book-name">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="book-author">
            <label htmlFor="author">Author:</label>
            <input type="text" name="author" id="author" />
          </div>
          <div className="book-pages">
            <label htmlFor="pages">No. of Pages:</label>
            <input type="number" name="pages" id="pages" />
          </div>
          <div className="book-read">
            <label htmlFor="read">Did you read it?</label>
            <input type="checkbox" name="read" id="read" value="yes" />
          </div>
        </div>
        <button type="submit">Add to Library</button>
      </form>
    </div>
  );
};
export default Sidebar;
