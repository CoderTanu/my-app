import React, { useState } from 'react'



export default function TextForm(props) {


const handleUpClick = () =>{
  console.log("converted on upper case" + text)
  let newText =text.toUpperCase();
   setText(newText);
   props.showAlert("Converted into UpperCase", "success");

}
const handleLoClick = () =>{
  console.log("converted on lower case" + text)
  let newText =text.toLowerCase();
   setText(newText);
     props.showAlert("Converted into LowerCase", "success");
}


const handleOnChange = (event) =>{
  console.log("handle all changes")
  setText(event.target.value);
  
}

  const [text, setText] = useState('');
  return (
    <>
       
    <div className="container" style = {{color:props.mode==='light' ? 'dark' : 'purple'} }>
   
   <h1> {props.heading} </h1>     
<div className="mb-3" >
  <textarea className="form-control"  value ={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>

<button className=" btn btn-primary mx-1"  onClick={handleUpClick}>Convert To UpperCase</button>
<button className=" btn btn-primary  mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
<div className="container">
<h2>Your text summary</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>

<p>{0.008 * text.split(" ").length} Mintues to read.</p>
<h2>Preview</h2>
<p>{text}</p>
</div>


    </div>
    </>
  )
}

