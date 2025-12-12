import React from "react";
import { Link } from "react-router-dom";

function Showbooks(props) {
  return props.Books.map((book) => (
    <tr key={book._id}>
      <td>{book.booktitle}</td>
      <td>{book.author}</td>
      <td>{book.Topic}</td>
      <td>{book.formate}</td>
      <td>{book.PubYear}</td>
      <td><Link to={`/edit/${book._id}`}>Edit</Link></td>
      <td><Link to={`/Delete/${book._id}`}>Delete</Link></td>
    </tr>
  ));
}

export default function DisplayData(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Topic</th>
          <th>Format</th>
          <th>Year</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <Showbooks Books={props.Books} />
      </tbody>
    </table>
  );
}
