import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    text.trim().length !== 0 && props.showAlert("Converted to UpperCase", "success");
  };

  const handleOnClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    text.trim().length !== 0 && props.showAlert("Converted to LowerCase", "success");
  };

  const handleClear = () => {
    setText(''); // Clear the text
    text.trim().length !== 0 && props.showAlert("Cleared", "success");
  };

  const handleCopy = () => {
    var textElement = document.getElementById("mybox");
    textElement.select();
    navigator.clipboard.writeText(textElement.value);
    if (text.trim().length > 0) {
     /* text.trim().length !== 0 &&*/ props.showAlert("Copied to Clipboard", "success");
    }
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/).filter((word) => word !== '').join(" ");
    setText(newText);
    text.trim().length !== 0 && props.showAlert("Extra Spaces Removed", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{ backgroundColor: props.mode === 'white' ? 'white' : 'black', color: props.mode === 'white' ? 'black' : 'white' }}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={() => {
          if (text.trim().length === 0) {
            props.showAlert("Enter the text to convert into UpperCase", "warning");
          } else {
            handleUpClick();
          }
        }}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={() => {
          if (text.trim().length === 0) {
            props.showAlert("Enter the text to convert into LowerCase", "warning");
          } else {
            handleOnClick();
          }
        }}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={() => {
          if (text.trim().length === 0) {
            props.showAlert("There is no text to clear", "warning");
          } else {
            handleClear();
          }
        }}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={() => {
          if (text.trim().length === 0) {
            props.showAlert("Enter the text to Copy", "warning");
          } else {
            handleCopy();
          }
        }}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={() => {
          if (text.trim().length === 0) {
            props.showAlert("Enter the text and if that text contains any extraspaces then I will remove extra spaces", "warning");
          } else {
            handleExtraSpaces();
          }
        }}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <p>
          {`${text.trim().length === 0 ? "0 Words and 0 Characters" : `${text.trim().split(/\s+/).filter((word) => word !== '').length} Words and ${text.trim().replace(/\s+/g, '').length} Characters`}`}
        </p>
        <p>{`${text.trim().length === 0 ? "0 Minutes to" : `${0.008 * text.trim().split(/\s+/).filter((word) => word !== '').length} Minutes to`}`} read</p>
        <h2>Preview</h2>
        <p>{text.trim().length > 0 ? text : 'Please write the text to Preview'}</p>
      </div>
    </>
  );
}