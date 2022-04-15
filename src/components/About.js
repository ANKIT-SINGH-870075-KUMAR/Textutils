import React from 'react'

export default function About(props) {
 // const [mystyle, setMystyle]=useState({
 //   color:'black',
 //   backgroungColor:'white'
 // })

 let myStyle ={
   color: props.Mode==='dark'?'white':'black',
   backgroundColor:props.Mode==='dark'?'#05155a':'white'
 }
 let myStyle1 ={
  color: props.Mode==='dark'?'white':'black',
  backgroundColor:props.Mode==='dark'?'#05155a':'white'
 }
 let myStyle2 ={
  color: props.Mode==='dark'?'white':'black',
  backgroundColor:props.Mode==='dark'?'#05155a':'white'
 }
  return (
    <div className="Container" style={{color: props.Mode==='dark'?'white':'black',}}>
      <h1 className="my-3">About Us</h1>  
      <div className="accordion" id="accordionExample">
  <div className="accordion-item mx-3">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle}  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Analyze your text</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       textutils gives you a way to analyze your text quickly and efficiently. Be it word count,character count or convert into lowwercase,uppercase and copied text
      </div>
    </div>
  </div>
  <div className="accordion-item mx-3">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong> free to use </strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      textutils is a free character counter tool that provides instant character count and word count statistics for a given text. textutils reports the number of words and character .thus it is suitable for writing text with word /character limit 
      </div>
    </div>
  </div>
  <div className="accordion-item mx-3">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser campatible </strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       this word counter software works in any web browers such as chrome,firefox,internet explorer,safari,opera.it suits to count character in facebook,blog, books, excel document,pdf documents,essays etc.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
