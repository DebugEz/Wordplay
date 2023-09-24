import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpclick = ()=>{
        console.log("uppercase is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "success")
    }
    const handlecopyclick = ()=>{
        let text = document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges();
        props.showAlert("copied", "success")
    }
    const handleclearclick = ()=>{
        console.log("uppercase is clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("cleared", "success")
    }
    const handlelowclick = ()=>{
        console.log("lowercase is clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase", "success")
    }

    const handleOnChange = (event)=>{
        console.log("on chaange is clicked");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
     <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
     <h2 className='mb-4'>{props.heading}</h2>
     <div className="mb-4">
      <textarea className="form-control" value = {text} style = {{backgroundColor: props.mode=== 'dark'? '#dee2e6':'white'}} onChange={handleOnChange}id="mybox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpclick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handlelowclick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleclearclick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handlecopyclick}>Copy Text</button>
     </div>
     <div className="container2">
     <h2> Your text summary </h2>
     <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} character</p>
     <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
     <h3> Preview</h3>
     <p>{text}</p>
     </div>
    </>
  )
}
