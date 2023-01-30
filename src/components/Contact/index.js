import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';


export default function ContactMe() {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (!errorMessage) {
      setFormState({ ...formState, [inputType]: inputValue });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Form submitted', formState);
      console.log('Handle form', formState);
    }
    window.location.href = "mailto:dasrima476@gmail.com?subject=" + name + "&body=" + message
  };

  return (

    <div class="contactPage">
      <div class="connectMsgDiv">
        <p class="connectMsgText">I'm looking to expand my network with fellow business owners and professionals.<br />
          I would love to learn about what you do and see if there's any way we can support each other.</p>
      </div>
      <div class="contactMeContainer">
        <form className="contactForm" onSubmit={handleSubmit}>
          <div class="nameRow">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="inputName"
              required
              onChange={handleInputChange}
            />
          </div>
          <div class="emailRow">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              className="inputEmail"
              required
              onChange={handleInputChange}
            />
          </div>
          <div class="messageRow">
            <div class="messageTitleDiv">
            </div>
            <textarea
              type="text"
              name="message"
              placeholder="Message"
              rows="5"
              className="inputMessage"
              required
              onChange={handleInputChange}
            />
          </div>
          {errorMessage && (
            <div>
              <p className="errorText">{errorMessage}</p>
            </div>
          )}
          <button type="submit" class="submit">Send</button>

        </form>
      </div>

    </div>


  )
}
