import React, { useState } from "react";
import '../App.css';

const TextArea = () => {
    const [jsonData, setJsonData] = useState('');
    const [parsedData, setParsedData] = useState(null);

    const handleInputChange = (event) => {
        const inputData = event.target.value;
        setJsonData(inputData);
        try {
            const parsedJson = JSON.parse(inputData);
            setParsedData(parsedJson);
        } catch (error) {
            setParsedData(null);
        }
    };

    return (
        <div className="after-nav">
            <div className="text-area">
                <div className="text-area-count"></div>
                <textarea
                    value={jsonData}
                    onChange={handleInputChange}
                    placeholder="Paste your JSON here"
                    rows={10}
                    cols={50}
                    className="text-area-box"
                />
            </div>
            <div className="funct-btn">
                <button className="text-func-btns">Validate JSON</button>
                <button className="text-func-btns">Compress JSON</button>
                <button className="text-func-btns">Save JSON</button>
            </div>
        </div>
    )
}

export default TextArea;