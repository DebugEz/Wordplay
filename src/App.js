
import './App.css';
import Navbar from './Compnent/Navbar';
import TextForm from './Compnent/TextForm';
import About from './Compnent/About';
import React,{useState} from 'react';
import Alert from './Compnent/Alert';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  const[mode,setMode] = useState('light')

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
       setAlert(null);
    },1500)
  }
  const toggleMode = () =>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '##042743';
      showAlert("dark mode has been enabled", "success")
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success")
    }
  }
  return (
    <>
      <BrowserRouter>
  <Navbar title="WordPlay" aboutUs="About us" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert} />
  <div className="container my-3">
    <Routes>
      <Route path="/" element={<TextForm heading="Try WordPlay - word counter, character counter, copy-text" showAlert={showAlert} mode={mode}/>}/>
      <Route path="/about" element={<About mode={mode}/>} />
    </Routes>
  </div>
</BrowserRouter>
    </>
  );
}


export default App;
