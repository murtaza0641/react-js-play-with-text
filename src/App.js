//import logo from './logo.svg';
//import './App.css';

import Navbar from './components/navbar.js';
import TextForm from './components/TextForm.js';

function App() {
  return (
    <>
      <Navbar title="Text Utils"/>
      <div className="container">
      <TextForm heading="Enter the text to analyze"/>
      </div>
      
    </>
  );
}

export default App;
