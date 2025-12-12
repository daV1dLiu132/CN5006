import React, { useState } from "react";
import axios from "axios";

export default function Book_Form() {
  let url = "http://localhost:5000/";

  const [state, setState] = useState({
    booktitle: "",
    author: "",
    formate: "",
    Topic: "",
    PubYear: 1990,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const OnSubmit = (e) => {
    e.preventDefault();

    const bookdata = {
      booktitle: state.booktitle,
      author: state.author,
      Topic: state.Topic,
      formate: state.formate,
      PubYear: state.PubYear,
    };

    axios.post(url + "addbooks", bookdata).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Add Book</h3>

      <form onSubmit={OnSubmit}>
        <div className="form-group">
          <label>Book Title:</label>
          <input
            type="text"
            className="form-control"
            name="booktitle"
            value={state.booktitle}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Author:</label>
          <input
            className="form-control"
            name="author"
            value={state.author}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Topic:</label>
          <select
            className="form-control"
            name="Topic"
            value={state.Topic}
            onChange={handleChange}
          >
            <option value="CS">Computer Science</option>
            <option value="Programming">Programming</option>
            <option value="AI">AI</option>
            <option value="Engineering">Engineering</option>
          </select>
        </div>

        <div className="form-group">
          <label>Format:</label><br />
          <input
            type="radio"
            name="formate"
            value="Hard Copy"
            checked={state.formate === "Hard Copy"}
            onChange={handleChange}
          /> Hard Copy
          <br />
          <input
            type="radio"
            name="formate"
            value="Electronic Copy"
            checked={state.formate === "Electronic Copy"}
            onChange={handleChange}
          /> Electronic Copy
        </div>

        <div className="form-group">
          <label>Publication Year:</label>
          <input
            type="range"
            min="1980"
            max="2025"
            name="PubYear"
            value={state.PubYear}
            onChange={handleChange}
          />
          {state.PubYear}
        </div>

        <center>
          <input type="submit" value="Add Book" className="btn btn-primary" />
        </center>
      </form>
    </div>
  );
}
