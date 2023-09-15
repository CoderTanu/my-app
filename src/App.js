import { useState } from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alter from './Components/Alter';
// import About from './Components/About';


import React from "react";
// import { Switch, Route ,
//  BrowserRouter as Router,

// } from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');
  const[alert, setAlert]=  useState(null);



  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type:type


    })
    setTimeout(() => {

      setAlert(null);

    }, 1500)
  }

const togglemode =() =>{

  if(mode === 'light'){
    setmode('dark');
    document.body.style.backgroundColor="grey";
    showAlert("Dark mode is enabled", "success");
  }else{
    setmode('light');
    document.body.style.backgroundColor="white";
    showAlert("light mode is enabled", "success");
  }
}



  return (
<>


<Navbar title="TextUtils" mode={mode}   togglemode ={togglemode}/>
<Alter alert={alert}/>
{/* <About/>
 <Router>
  <Switch>
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/"> */}
         <div className =" container my-3">
           <TextForm  showAlert={showAlert} heading ="Enter the text to analyze"/>
        </div>
   
          {/* </Route>
        </Switch>


 </Router> */}

</>






  );
}

export default App;
