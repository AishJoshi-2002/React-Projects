import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState("")
    const [isCopied, setIsCopied] = useState(false)
    const handleUcClick = () => {
        setText(text.toUpperCase())
    }
    const handleLcClick = () => {
        setText(text.toLowerCase())
    }
    const handleCoClick = () => {
        navigator.clipboard.writeText(text)
        setIsCopied(true)
    }
    const handleClClick = () => {
        setText('')
    }
    const handleExtraSpace = () => {
        setText(text.split(/[ ]+/).join(" "))
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
        setIsCopied(false)
    }
    const handleWordCount = () => {
        let wordCount = 0
        for (let ele of text.split(/\s+/)) {
            if (ele !== '') {
                wordCount++;
            }
        }
        return wordCount
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
                <button className='btn btn-primary mx-2' onClick={handleExtraSpace}>{props.extraSpace}</button>
                <button className={isCopied ? 'btn btn-success' : 'btn btn-primary'} onClick={handleCoClick}>{props.copy}</button>
                <button className='btn btn-primary mx-2' onClick={handleClClick}>{props.clear}</button>
            </div>
            <div className='container my-4'>
                <h2>Your text summary</h2>
                <p>Words: {text.length > 0 ? handleWordCount() : 0}</p>
                <p>Characters: {text.length}</p>
                <p>Minutes to read: {0.008 * text.split(/\s+/).length}</p>
                <h4>Preview</h4>
                <p>{text.length > 0 ? text : "Enter text to preview here"}</p>
            </div>
        </>
    );
}

TextForm.propTypes = { boxHeading: PropTypes.string, boxPlaceholder: PropTypes.string, upperCase: PropTypes.string, lowerCase: PropTypes.string, extraSpace: PropTypes.string, copy: PropTypes.string, clear: PropTypes.string }