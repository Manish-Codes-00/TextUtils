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
  
  const handleClearClick=()=>{
    let newText="";
    setText(newText);
  }
  
  const handleCopyClick=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleOnChange=(event)=>{
    setText(event.target.value);
  }

  const [text,setText]= useState("Enter text here");
return(
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
<div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#17283a':'white', color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 btn-secondary"  onClick={handleUpClick}>Convert To UpperCase</button>
<button className="btn btn-primary mx-2 btn-secondary"  onClick={handleDownClick}>Convert To LowerCase</button>
<button className="btn btn-primary mx-2 btn-secondary"  onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2 btn-secondary"  onClick={handleCopyClick}>Copy Text</button>
<button className="btn btn-primary mx-2 btn-secondary"  onClick={handleExtraSpace}>Remove Extra Spaces</button>
</div>
    <div className={`container my-2 text-${props.mode==='light'?'dark':'light'}`}>
    <h1>your text summary
    </h1>
    <p>
    {text.split(" ").length} words and characters  {text.length}
    </p>
    <p>time to read the text: {0.008* text.split(" ").length} minutes.</p>
    <h3>Preview</h3>
    <p>{text===""?"Enter something to preview":text}</p>
    </div>
    </>
);
} 