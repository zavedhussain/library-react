import React, { useState } from "react";
import Library from "./components/Library";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { data } from "./data";

const App = () => {
  const [books, setBooks] = useState(data);
  return (
    <div className="container">
      <Header />
      <Sidebar books={books} setBooks={setBooks} />
      <Library books={books} setBooks={setBooks} />
      <Footer />
    </div>
  );
};
export default App;
