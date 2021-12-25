import React,{useState} from 'react'

export default function TextForm() {
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const changeToUppercase=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }

    const changeToLowercase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const [text, setText] = useState('')

    return (
        <div className="my-4">
            <h3>Enter your text below</h3>
            <div className="mb-3">
            <textarea className="form-control" value={text}  onChange={handleOnChange} id="textarea" rows="8"></textarea>
            </div>           
            <button className="btn btn-outline-primary" onClick={changeToUppercase}>Convert to Uppercase</button>
            <button className="btn btn-outline-primary mx-3" onClick={changeToLowercase}>Convert to Lowercase</button>
        </div>
    )
}
