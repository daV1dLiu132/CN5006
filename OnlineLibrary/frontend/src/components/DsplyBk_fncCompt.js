import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayData from "./DisplayData";

export default function FncDisplayBooks() {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/allbooks").then((res) => {
      setBooks(res.data);
    });
  }, []);

  return <DisplayData Books={Books} />;
}
