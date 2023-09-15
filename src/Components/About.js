import React from 'react'
import { useState } from 'react'

export default function About() {

const [mystyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor:'white'
    })

    const [textbtn, setTxtBtn] = useState("Enable dark mode")

const toggleStyle = ()=>{

    if(mystyle.color == 'black'){
        setMyStyle ({
        color: 'white',
        backgroundColor:'black'
    })
    setTxtBtn("Enable Light mode")
    }else{
         setMyStyle({
        color: 'black',
        backgroundColor:'white'
    })
     setTxtBtn("Enable Dark mode")
    }
}


  return (
    <div>
      
<div className="container my-6">
   <button onClick={toggleStyle} type="button" className="btn btn-primary">{textbtn}</button>

        </div>
    </div>
  )
}
