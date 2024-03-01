import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState("")
    const [isCopied, setIsCopied] = useState(false)
    const handleUcClick = ()=>{
        setText(text.toUpperCase())
    }
    const handleLcClick = ()=>{
        setText(text.toLowerCase())
    }
    const handleCoClick = ()=>{
        navigator.clipboard.writeText(text)
        setIsCopied(true)
    }
    const handleClClick = ()=>{
        setText('')
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
        setIsCopied(false)
    }
    return (
        <>
            <div className='container'>
                <h1>{props.boxHeading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder={props.boxPlaceholder} value={text} onChange={handleOnChange} id="textBox" rows="9"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUcClick}>{props.upperCase}</button>
                <button className='btn btn-primary' onClick={handleLcClick}>{props.lowerCase}</button>
                <button className={isCopied ? 'btn btn-success mx-2' : 'btn btn-primary mx-2'} onClick={handleCoClick}>{props.copy}</button>
                <button className='btn btn-primary' onClick={handleClClick}>{props.clear}</button>
            </div>
            <div className='container my-4'>
                <h2>Your text summary</h2>
                <p>Words: {text.split(' ').length}</p>
                <p>Characters: {text.length}</p>
                <p>Minutes to read: {0.008 * text.split(' ').length}</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </>
    );
}

TextForm.propTypes = { boxHeading: PropTypes.string, boxPlaceholder: PropTypes.string, upperCase: PropTypes.string, lowerCase: PropTypes.string }