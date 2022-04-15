import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick =()=>{
     // console.log("Uppercase was clicked"+ text);
      let newText=text.toUpperCase();
      settext(newText)
      props.showAlert("Converted to Uppercase!","success");
  }

  const handleloClick =()=>{
    // console.log("lowercase was clicked"+ text);
     let newText=text.toLowerCase();
     settext(newText)
     props.showAlert("Converted to Lowercase!","success");
  }

  const handleDeClick =()=>{
    // delete text
     let newText='';
     settext(newText)
     props.showAlert("Delete text!","success");
  }
 
  const handleCopy=()=>{
    //copy text
    let text =document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Coppied!","success");
  }

  const handleOnChange =(event)=>{
    // console.log("on change");
    settext(event.target.value);
  }
  {/*ye important sytanx ha aur ye text ko change krne ke liye use ho ga  */}
  const[text,settext]=useState("");

  //text="new text"; // wrong way to change the state 
  //setText("new text"); //correct way to change the state
  return (
    <>
    <div className="container my-3" style={{color:props.Mode==='light'?'black':'white'}}>
      <h2 className='mb-4'>{props.Heading}</h2>  
      <div className="mb-3">
      <textarea className="form-control" value={text} style={{backgroundColor:props.Mode==='light'?'white':'#ff000008',color:props.Mode==='light'?'black':'white'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      {/*create button  */}
      <button disabled={text.length===0} className="btn btn-dark mx-1 my-1"  style={{backgroundColor:props.Mode==='light'?'black':'white',color:props.Mode==='light'?'white':'black'}} onClick={handleUpClick}>convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" style={{backgroundColor:props.Mode==='light'?'black':'white',color:props.Mode==='light'?'white':'black'}} onClick={handleloClick}>convert to lowercase</button>
      <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" style={{backgroundColor:props.Mode==='light'?'black':'white',color:props.Mode==='light'?'white':'black'}} onClick={handleDeClick}>Delete</button>
      <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" style={{backgroundColor:props.Mode==='light'?'black':'white',color:props.Mode==='light'?'white':'black'}} onClick={handleCopy}>copy</button>
    </div>
    <div className="container my-3" style={{color:props.Mode==='light'?'black':'white'}}>
      <h2>your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}Mintues read</p>
      <h3>preview</h3>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
