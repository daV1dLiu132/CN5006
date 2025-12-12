import React from "react";

function Square(props) {
    const { value, onResult } = props;

    const handleSquare = () => {
        const num = Number(value);
        if (!isNaN(num)) {
            onResult((num * num).toString());
        } else {
            alert("Please enter a valid number first.");
        }
    };

    return (
        <button className="ButtonStyle" onClick={handleSquare}>
            square
        </button>
    );
}

export default Square;