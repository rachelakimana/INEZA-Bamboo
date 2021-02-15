//import './App.css';
import React, {useState} from 'react';
import Headercolor from './components/Header';

const App = () => {
  
      const [isClicked, setClicked] = useState('home')
    
  return(
    <div className=" h-screen w-screen bg-white">
      <div className = "fixed bg-red-700 h-12 w-full flex justify-center items-center text-xl text-white">
        <div className = "pl-12 capitalize hover:text-black cursor-pointer">
          <Headercolor isActive={isClicked === 'home'} setClicked={setClicked} href="#">home</Headercolor>
        </div>
        <div className = "pl-12 capitalize hover:text-black cursor-pointer">
          <Headercolor isActive={isClicked === 'services'} setClicked={setClicked} href="#">services</Headercolor>
        </div>
        <div className = "pl-12 capitalize hover:text-black cursor-pointer">
          <Headercolor isActive={isClicked === 'about'} setClicked={setClicked} href="#">about</Headercolor>
        </div>
        <div className = "pl-12 capitalize hover:text-black cursor-pointer">
          <Headercolor isActive={isClicked === 'contact'} setClicked={setClicked} href="#">contact</Headercolor>
        </div>  
          
      </div>
        <div className = "h-3/4 w-full bg-headerbgimage bg-cover bg-no-repeat">

      </div>
    
    
    </div>
  );
}

export default App;
