import React, { useState } from "react";
import Button from "./Button";
import Square from "./Square";
import "./Calculator.css";
import goblin from "./goblin.jpeg"

function KeyPadComponent() {
    const [text, setText] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleClick = (e) => {
        const value = e.target.value;

        if (value === "C") {
            setText("");
            setImageUrl("");
        } 
        
        else if (value === "=") {
            try {
                const result = eval(text);
                setText(result.toString());
            } catch {
                alert("Invalid Expression");
            }
        }

        else if (value === "show me") {
    setImageUrl(imageUrl ? "" : goblin);
}

        else {
            setText(text + value);
        }
    };

    return (
        <div className="Calculator">

            <div className="screen-row">
                <input type="text" readOnly value={text} />
            </div>

            <div>
                <Button label="(" onClick={handleClick} />
                <Button label="CE" onClick={handleClick} />
                <Button label=")" onClick={handleClick} />
                <Button label="C" onClick={handleClick} />
            </div>

            <div>
                <Button label="1" onClick={handleClick} />
                <Button label="2" onClick={handleClick} />
                <Button label="3" onClick={handleClick} />
                <Button label="+" onClick={handleClick} />
            </div>

            <div>
                <Button label="4" onClick={handleClick} />
                <Button label="5" onClick={handleClick} />
                <Button label="6" onClick={handleClick} />
                <Button label="-" onClick={handleClick} />
            </div>

            <div>
                <Button label="7" onClick={handleClick} />
                <Button label="8" onClick={handleClick} />
                <Button label="9" onClick={handleClick} />
                <Button label="*" onClick={handleClick} />
            </div>

            <div>
                <Button label="." onClick={handleClick} />
                <Button label="0" onClick={handleClick} />
                <Button label="=" onClick={handleClick} />
                <Button label="/" onClick={handleClick} />
            </div>

            {/* Task 2 + Task 3 buttons */}
            <div>
                <Button label="show me" onClick={handleClick} />

                <Square
                    value={text}
                    onResult={(result) => setText(result)}
                />
            </div>

            {imageUrl && (
                <img 
                    src={imageUrl} 
                    alt="displayed"
                    style={{ width: "200px", marginTop: "10px" }}
                />
            )}
        </div>
    );
}

export default KeyPadComponent;