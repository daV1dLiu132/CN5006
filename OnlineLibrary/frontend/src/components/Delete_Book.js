import { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function DeleteBook() {
  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios.delete("http://localhost:5000/deletebook/" + params.id)
      .then(() => navigate("/DisplayBooksF1"));
  }, [params.id, navigate]);

  return <h3>Deleting Book...</h3>;
}
