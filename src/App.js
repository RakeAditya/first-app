// import logo from './logo.svg';
import './App.css';
import Navbar from "./comp/Navbar.js";
import TextForm from './comp/TextForm';
import About from "./comp/About.js"

function App() {
  return (
  <>
  <Navbar title="name"/>
  <TextForm heading="Enter your name heres"/>  
  <About/>
  </>
  );
}

export default App;
