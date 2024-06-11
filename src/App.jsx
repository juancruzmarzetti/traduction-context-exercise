import './App.css'
import React from 'react'
import {useLanguageStates} from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Context from './context';

function App() {

  const {language, setLanguage} = useLanguageStates();

  const handleChangeLA = () => {
    if(language === "EN"){
      setLanguage("ES");
    }else if(language === "ES"){
      setLanguage("PTBR");
    }else{
      setLanguage("EN");
    }
  }

  return (
    <div className="App">
      <Navbar handleChangeLA={handleChangeLA}/>
      <Body />
    </div>
  )
}

export default App