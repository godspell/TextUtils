import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleloClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
       props.showAlert("Converted to Lowercase", "success");
    };

    const handleclearClick = () => {
      let newText = "";
      setText(newText);
      props.showAlert("Text has been cleared", "success");
    };

    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    };

    const handleCopy =()=>{
      var copytext = document.getElementById("myBox");
      copytext.select();
      navigator.clipboard.writeText(copytext.value);
      props.showAlert("Copied to clipboard", "success");
    }

    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra space has been removed", "success");
    }

    const handleOnChange =(event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter Text here');
    // text = "New text"  worng way to change state
    // setText("Sumeet")  //correct way to change the state

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#3A3845" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
        >
          Speak
        </button>
      </div>

      <div
        className="container "
        my-3
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length - 1} words {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length - 0.008} Minutes read Time</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Write something in the textbox to preview it here."}
        </p>
      </div>
    </>
  );
}
 