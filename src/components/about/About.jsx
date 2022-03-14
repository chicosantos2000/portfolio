import React from 'react'
import "./about.css"
import View from "../../img/view.jpg"
import Logo from "../../img/react.png"


const About = () => {
  return (
    <div className="a"> 
    <div className="a-left">
        <div className="a-card bg"> </div>
        <div className="a-card">
       <img src={View} alt="" className="a-img" />
        </div>
    </div> 
    
    
    <div className="a-right">
    <h1 className="a-title">About Me</h1>
   
    <p className="a-sub">
    PLACEHOLDER WRITE HERE AFTER
    PLACEHOLDER WRITE HERE AFTER
    PLACEHOLDER WRITE HERE AFTER
    </p>
    
    <p className="a-desc">  
    PLACEHOLDER WRITE HERE AFTER
    PLACEHOLDER WRITE HERE AFTER
    PLACEHOLDER WRITE HERE AFTER
    PLACEHOLDER WRITE HERE AFTER
    </p>


    <div className="a-react">
    <img src={Logo} alt="" className="a-react-img" />
    <div className="a-react-texts">
    <h4 className="a-react-title"> React
    <p className="a-react-desc">
    Utilizei a framework React, pois está muito em demanda e é algo que estou a aprender

    </p>


    </h4>

    </div>
    </div>



    </div>
    
    </div>
  )
}

export default About