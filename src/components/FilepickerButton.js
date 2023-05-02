import React, { useRef } from 'react';
import './FilePickerButton.css';

function FilePickerButton() {
  const fileInputRef = useRef(null);

  function handleClick() {
    fileInputRef.current.click();
  }

  return (
    <div className="file-picker-button">
      <button onClick={handleClick}>Pick a File</button>
      <input type="file" ref={fileInputRef} />
    </div>
  );
}

export default FilePickerButton;