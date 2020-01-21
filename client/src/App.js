import React  from 'react';
import {Route} from 'react-router-dom';

//Navigation 
import NavBar from './navigation/NavBar';
import Popup from "reactjs-popup";
import BurgerIcon from "./navigation/BurgerIcon";
import Menu from "./navigation/Menu";
import "./index.css";

//Components
import Tasks from './todo/Tasks';
import Youtube  from './youtube/Youtube';
import About from './about/About';
import Home from './about/Home';


function App() {
  return (
    <div className="App">
      <header className="header">
        <NavBar/>
      <Popup
        modal 
        overlayStyle={{ background: "rgba(255,255,255,0.98" }} 
        contentStyle={contentStyle} 
        closeOnDocumentClick={false} 
        trigger={open => <BurgerIcon open={open} />} 
      >
        {close => <Menu close={close} />} 
      </Popup>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={Tasks} />
            <Route path="/consumer" component={About} />
            <Route path="/farmer" component={Youtube} /> 
   
      </header>
    </div>
  );
}

export default App;

//Styling
const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none"
};