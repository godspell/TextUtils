// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from "./components/Alert";
import React, { useState } from "react";
// import About from "./components/About";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type,
      });
       setTimeout(() => {
         setAlert(null);
       }, 2000);
    };

  const [mode, setmode] = useState('light');

  const toggleMode = () =>{
    if(mode === 'light') {
      setmode ('dark');
      document.body.style.background = "#042743";
      showAlert("Dark mode has been enable", "success")
      document.title = "TextUtils - Dark Mode";
    }  
    else {
      setmode('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been enable", "success");
      document.title = "TextUtils - Light Mode";
    }

  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      {/* <Navbar/> */}
      <div className="container my-3">
         {/* <Switch>
          <Route exact path="/about">
            <About/>
          </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter Text to Analyse" mode={mode}/>
          {/* </Route>
        </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
};

export default App;
