import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    title: "Fourth Wing (The Empyrean, 1)",
    author: "Rebecca Yarros",
    img: "https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg",
    id: 1,
  },
  {
    title: "The Woman in Me",
    author: "Britney Spears ",
    img: "https://images-na.ssl-images-amazon.com/images/I/61BWsc9eGbL._AC_UL600_SR600,400_.jpg",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { title, author, img } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
