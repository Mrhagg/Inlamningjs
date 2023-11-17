import React from 'react'
import { useState } from 'react'
import './styles.css'
import Button from '../../../../components/Extras/Button'
import SectionTitle from '../../../../components/Extras/SectionTitle';


function Form() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false)
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false)
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState(false)



  const handleNameChange = (e) => {
    console.log(e.target.value)
    setName(e.target.value);
    validateName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    validateMessage(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateForm()
    if ((name && !nameError) || (email && !emailError) || (message && !messageError)) {
      alert('Formuläret har validerats')


      if (name.length < 5 || !email.includes('@') || message.length < 8) {
        return;
      }

      try {
        const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name, email, message
          }),
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
      } catch (error) {
        console.error('Fel vid API-anrop:', error);
        alert('Något gick fel vid skickandet av formuläret.');
      }
    }
  }

  const validateName = (name) => {
    if (name.length < 5) {
      setNameError(true)
      return
    } setNameError(false)
  }

  const validateEmail = (email) => {
    if (!email.includes('@')) {
      setEmailError(true)
      return
    } setEmailError(false)
  }

  const validateMessage = (message) => {
    if (message.length < 8) {
      setMessageError(true)
      return
    } setMessageError(false)
  }
  const validateForm = () => {
    validateName(name)
    validateEmail(email)
    validateMessage(message)
  }

  return (
    <section className="message-container">
      <div className="Text1">
        <SectionTitle bigtitle="Leave us a message for any information." />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="name" className={nameError ? 'errorMessage' : 'errorMessageHidden'}>Användarnamn måste innehålla minst 5 tecken</label>
          <input id="name" type="text" placeholder="Name*" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label for="email" className={emailError ? 'errorMessage' : 'errorMessageHidden'}>Email måste alltid innehålla ett @</label>
          <input id="email" type="text" placeholder="Email*" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label for="message" className={messageError ? 'errorMessage' : 'errorMessageHidden'}>Meddelanden måste alltid innehålla minst 8 tecken</label>
          <textarea rows={5} id="message" type="text" placeholder="Your Message*" value={message} onChange={handleMessageChange} />
        </div>
        <Button className="btn-yellow" title="Send Message" type="submit" />
      </form>
    </section>
  );
};
export default Form;
