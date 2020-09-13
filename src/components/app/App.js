import React from "react";
import "./App.css";
import BookList from "../../containers/book-list";
import BookDetail from "../../containers/book-details";

function App() {
  return (
    <div className="App container">
      <BookList />
      <BookDetail />
    </div>
  );
}

export default App;
