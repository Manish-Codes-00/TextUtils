import './App.css'
import React, { useState } from 'react'
// import About from './Components/About';
import Navigation from './Components/Navigation';
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleMode=()=>{
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='#17283a'
      showAlert("Dark mode Enabled","success")
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      document.title = 'TextUtils - Home'
      showAlert("Light mode Enabled","success")
    }
  }
  return (
    <>
    <Navigation title="TextUtils" mode={mode} toggleMode={toggleMode} About="About"/>
    <Alert alert={alert}/>
    <div className="container">
      {/* <About/> */}
    <TextForm showAlert={showAlert} heading="This is the heading" mode={mode}/>
    </div>
    </>
  );
}
export default App;
