import React from 'react'
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Adress from "../../img/adress.png"
import {useRef} from "react";
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
init("gysyzzERGmgtyEpYL");



const Contact = () => {
  const formRef = useRef ()
  const [done, setDone] = useState(false)
  const handleSubmit = (e) =>{
    e.preventDefault();
    emailjs.sendForm(
      'service_236afjq', 
    'template_odjqeuw', 
    formRef.current, 'gysyzznERGmgtyEpYL')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <div className="c">
        <div className="c-bg">
            <div className="c-wrapper">
            <div className="c-left">
            <h1 className="c-title">Formulário para contacto</h1>
            <div className="c info">
                <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +351 918 369 021
            
                </div>
                <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              fingerfranc@gmail.com
            
                </div>
                <div className="c-info-item">
              <img src={Adress} alt="" className="c-icon" />
              Oliveira de Azeméis
            
                </div>
            </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                <b>Necessitam mais alguma informação?</b>
                Não hesitem em contactar!

                </p>
                <form ref={formRef} onSubmit={handleSubmit}>  
                <input type="text" placeholder="Name" name="user_name"></input>
                <input type="text" placeholder="Subject" name="user_sub"></input>
                <input type="text" placeholder="Email" name="user_email"></input>
                <textarea rows="5" placeholder="Message" name="message"/>
                <button>Submit</button>
                </form>


            </div>
            </div>

        </div>


    </div>
  )
}

export default Contact