import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Book_UpDateForm() {
  let url = "http://localhost:5000/";
  let params = useParams();

  const [state, setState] = useState({
    booktitle: "",
    author: "",
    formate: "",
    Topic: "",
    PubYear: 1990,
  });

  useEffect(() => {
    axios.get(url + "getbook/" + params.id).then((res) => {
      setState(res.data);
    });
  }, [params.id]);

  const handleChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    axios.post(url + "updatebook/" + params.id, state);
  };

  return (
    <div>
      <h3>Update Book</h3>
      <form onSubmit={OnSubmit}>
        <input name="booktitle" value={state.booktitle} onChange={handleChange} />
        <input name="author" value={state.author} onChange={handleChange} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
