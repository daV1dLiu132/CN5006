import React, {useEffect, useState } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
function Book_UpDateForm(props){
    const [state, setState] = useState({
        booktitle: "",
        author: "",
        formate: "",
        Topic:"",
        PubYear:1990,
    });

    let url="http://;pca;hpst:5000/"
    let params = useParams();

    const handlechange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value,
        });
    };

    useEffect(()=> {
        axios.get('http://localhost:5000/getbook/,params.id')
        .then(res => {
            console.log("update fun"+res.data)
            setState(res.data)
        })

        .catch(err => {
            console.log("error has occured")
        })
    },[]);

    return(
        <div style={{marginTop: 10}}>
            <h3>Update Book Id: {props.match.params.id}</h3>
            <form onSubmit={onSubmit} method="Post">
                <div className="form-group">
                    <label>Book Title: </label>
                    <input className-"form-control" type="text" name="booktitle" value={state.booktitle} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Book Authors: </label>
                    <input className="form-control" name="author" value={state.author} onChange={handleChange} />
                </div>
            </form>
        </div>
    )
}
