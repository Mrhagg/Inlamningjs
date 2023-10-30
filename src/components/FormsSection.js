import React from 'react'
import { useState } from 'react'
import './FormsSection.css'
import Button from './Extras/Button'
import SectionTitle from './Extras/SectionTitle';




function FormSection() {
  const [name, setName] = useState ('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  

  
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailPattern.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail) {
      alert('Ange en giltig e-postadress.');
      return;
    }

    if (!name || !email || !message) {
      alert('Alla fält måste innehålla ett värde.');
      return;
    } 
  };

 
    return (
      <section className="message-container">
        <div className="Text1">
          <SectionTitle bigtitle="Leave us a message for any information." />   
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}    
              required
            />
            {!isValidEmail && <span>Du måste ange ett giltigt namn</span>}
            <span></span>
          </div>
          <div>
            <input className="input2"
              type="email"
              placeholder="Email*"
              value={email}
              onChange={handleEmailChange}
              required
            />
           {!isValidEmail && <span>Du måste ange en giltig e-postadress</span>}
          </div>
          <div>
            <input className="input3"
              type="text"
              placeholder="Your Message*"
              value={message}
              onChange={(e) => setMessage(e.target.value)}    
              required   
            />
             {!isValidEmail && <span>Du måste ange ett</span>}
            <span></span>
          </div>
          <Button className="btn-yellow" title="Send Message" />
        </form>
      </section>
    );
}
export default FormSection;
