import './App.css'
import React, { useState } from 'react'
// import About from './Components/About';
import Navigation from './Components/Navigation';
import TextForm from "./Components/TextForm";
function App() {
  const [mode, setMode] = useState('light');
  
  const toggleMode=()=>{
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='#17283a'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
    <Navigation title="TextUtils" mode={mode} toggleMode={toggleMode} About="About"/>
    <div className="container">
      {/* <About/> */}
    <TextForm heading="This is the heading" mode={mode}/>
    </div>
    </>
  );
}
export default App;
