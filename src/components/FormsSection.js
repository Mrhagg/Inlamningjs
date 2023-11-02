import React from 'react'
import { useState } from 'react'
import './FormsSection.css'
import Button from './Extras/Button'
import SectionTitle from './Extras/SectionTitle';

function FormSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
      setName(e.target.value);
  }

  const handleEmailChange = (e) => {
      setEmail(e.target.value);
  }

  const handleMessageChange = (e) => {
      setMessage(e.target.value);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (name.length < 2 || !email.includes('@') || message.length < 4) {
      return;
    }
  
    const formData = {
      name,
      email,
      message,
    };
  
    try {
        const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
    
          if (response.status === 200) {
                alert('Formuläret har skickats.');
                console.log(response.status)
                const api = await response.text();
                console.log('Response from the API:', api);
              } else {
                alert('Något gick fel vid skickandet av formuläret.');
                console.log(!response.status)
                const api = await response.text();
                console.log(' No response from API:', api);
              }
            }   catch (error) {
                console.error('Fel vid API-anrop:', error);
                alert('Något gick fel vid skickandet av formuläret.');
              }
  }
  
  const validateForm = () => {
     if (name.length < 2) {
     alert('Ogiltigt namn. Namnet måste ha minst 2 bokstäver.');
    } else if (!email.includes('@')) {
      alert('Ogiltig e-postadress. E-postadressen måste innehålla "@".');
    } else if (message.length < 4) {
      alert('Felaktigt meddelande. Meddelandet måste innehålla minst 4 bokstäver.');
    } else {
      alert('Validering godkänd. Skickar formuläret.');
    }
  }

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
              onChange={handleNameChange}    
            />
          </div>
          <div>
            <input className="input2"
              type="text"
              placeholder="Email*"
              value={email}
              onChange= {handleEmailChange}
            />
          </div>
          <div>
            <input className="input3"
              type="text"
              placeholder="Your Message*"
              value={message}
              onChange={handleMessageChange}    
            />
          </div>
          <Button className="btn-yellow" title="Send Message" type="submit" onClick={validateForm} />
      </form>
    </section>
   
   );
};
export default FormSection;
