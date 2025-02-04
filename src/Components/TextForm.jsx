import React, { useState } from 'react'

export default function TextForm(props){
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleDownClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }

  const [text,setText]= useState("Enter text here");
return(
    <>
    <div className='container'>
<div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 btn-secondary"  onClick={handleUpClick}>Convert To UpperCase</button>
<button className="btn btn-primary mx-2 btn-secondary"  onClick={handleDownClick}>Convert To LowerCase</button>
</div>
    <div className='container my-2'>
    <h1>your text summary
    </h1>
    <p>
    {text.split(" ").length} words and characters  {text.length}
    </p>
    <p>time to read the text: {0.008* text.split(" ").length} minutes.</p>
    <h3>Preview</h3>
    <p>{text}</p>
    </div>
    </>
);
} 