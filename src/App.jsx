import './App.css'
// import About from './Components/About';
import Navigation from './Components/Navigation';
import TextForm from "./Components/TextForm";
function App() {
  return (
    <>
    <Navigation title="TextUtils" About="About"/>
    <div className="container">
      {/* <About/> */}
    <TextForm heading="This is the heading"/>
    </div>
    </>
  );
}
export default App;
