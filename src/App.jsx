import "./App.css";
import React, { useState } from "react";
import About from "./Components/About";
import Navigation from "./Components/Navigation";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
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

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#17283a";
      showAlert("Dark mode Enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Home";
      showAlert("Light mode Enabled", "success");
    }
  };
  return (
    <>
    <Router>
      <Navigation
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        About="About"
      />
      <Alert alert={alert} />
      <div className="container">
      <Routes>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />} />
            <Route exact path="/About" element={<About />} />
      </Routes>
      </div>
      </Router>
    </>
  )
}
export default App;
