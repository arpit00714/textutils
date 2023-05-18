import React, {useState} from "react";


export default function TextForm(props) {
   const handleUpClick = () => {
         
         let newText = text.toUpperCase();
         setText(newText);
         props.showAlert("Converted to uppercase!", "success");
        }
        const handleLoClick = () => {
          
          let newText = text.toLowerCase();
          setText(newText);
          props.showAlert("Converted to lowercase!", "success");
    }

   const handleOnChange = (event) => {
        //  console.log('Onchange')
         setText(event.target.value);
    }

    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }

    const [text, setText] = useState('');

  return (
    <>
    <div className="container"  style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      {/* <p>3431 words and 4532324 characters</p> */}
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>

    </div>
    </>
  );
}
