import './App.css'
import Navigation from './Components/Navigation';
import TextForm from "./Components/TextForm";
function App() {
  return (
    <>
    <Navigation title="TextUtils" About="About"/>
    <div className="container">
    <TextForm heading="This is the heading"/>
    </div>
    </>
  );
}
export default App;
