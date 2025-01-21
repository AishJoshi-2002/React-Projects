import React, { useState } from "react";
import "../App.css";

const TextArea = () => {
  const [jsonData, setJsonData] = useState("");
  const [isValid, setIsValid] = useState(null);
  // const [parsedData, setParsedData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const inputData = event.target.value;
    setJsonData(inputData);
    // try {
    //     const parsedJson = JSON.parse(inputData);
    //     setParsedData(parsedJson);
    // } catch (error) {
    //     setParsedData(null);
    // }
  };

  const validateJSON = () => {
    console.log("Validate func clicked");
    if (jsonData.trim() === "") {
      alert("Input is empty");
    } else {
      try {
        JSON.parse(jsonData);
        setIsValid(true);
        setErrorMessage("");
      } catch (error) {
        setIsValid(false);
        setErrorMessage(error.message);
      }
    }
  };

  const compressJSON = () => {
    console.log("Compress func clicked");
    if (jsonData.trim() === "") {
      alert("Input is empty");
    } else {
      try {
        JSON.stringify(jsonData);
        setIsValid(true);
        setErrorMessage("");
      } catch (error) {
        setIsValid(false);
        setErrorMessage(error.message);
      }
    }
  };

  const saveJSON = () => {
    console.log("Save func clicked");
    // if (jsonData !== '' && JSON.parse(jsonData)) {
    //     setResult("JSON saved successfully");
    // } else {
    //     setResult("Invalid JSON");
    // }
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
        <button className="text-func-btns" onClick={validateJSON}>
          Validate JSON
        </button>
        <button className="text-func-btns" onClick={compressJSON}>
          Compress JSON
        </button>
        <button className="text-func-btns" onClick={saveJSON}>
          Save JSON
        </button>
      </div>
      {isValid !== null && (isValid ? alert("Valid JSON!") : alert(`Invalid JSON: ${errorMessage}`))}
    </div>
  );
};

export default TextArea;
