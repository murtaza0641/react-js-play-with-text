import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter Text Here");

    const handleChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    };
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };
    const saveClick = () => {
        navigator.clipboard.writeText(text)
        
    };
    const clearClick = () => {
        
        setText("");
    };
    
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">

                <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleLowClick}>Convert To Uppercase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={saveClick}>Save to Clipboard</button>
                <button className="btn btn-primary my-3 mx-3" onClick={clearClick}>Clear All</button>
            </div>
            <div>
                <h3>Your Text Summary</h3>
                <p>number of words : {text.split(" ").length}  and Number of Characters : { text.length } and words Characters without spaces : {text.split(" ").join("").length} 
                 </p>
            </div>

        </>

    )
}