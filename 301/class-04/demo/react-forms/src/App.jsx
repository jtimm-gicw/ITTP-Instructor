import { useState } from 'react';
import Header from './Header.js';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './App.css';

function App() {

  // 🧠 STATE: stores what user types in input
  const [username, setUsername] = useState('user');

  // 🧠 FORM SUBMIT HANDLER
  // prevents page refresh and logs submit event
  function handleFormSubmitted(event) {
    event.preventDefault(); // stops page reload
    console.log('submitted');
  }

  // 🧠 INPUT HANDLER (runs every time user types)
  function handleUsernameTyped(event) {

    // if user typed something, update state
    if (event.target.value.length > 0) {
      setUsername(event.target.value);
    } 
    // if input is empty, reset to default value
    else {
      setUsername('user');
    }
  }

  return (
    <div>

      {/* 🧠 Passing state down to Header as props */}
      <Header potato={username} />

      {/* 🧠 Plain HTML form */}
      <form onSubmit={handleFormSubmitted}>

        {/* Label for accessibility */}
        <label htmlFor="name">Name</label>

        {/* 🧠 Controlled input using React state */}
        <input 
          id="name"
          name="name"
          type="text"
          onInput={handleUsernameTyped} 
        />

        <br />

        {/* Date input (not connected to state yet) */}
        <label htmlFor="dob">Date of Birth</label>
        <input type="date" name="dob" id="dob" />

        <br />

        {/* Submit button triggers form submit handler */}
        <input type="submit" />
      </form>

      {/* 🧠 React-Bootstrap version of same input */}
      <Container>
        <Form>

          <Form.Group controlId="bootstrapName">
            <Form.Label>Name</Form.Label>

            {/* Same handler as above — just styled differently */}
            <Form.Control 
              type="text" 
              onInput={handleUsernameTyped} 
            />
          </Form.Group>

        </Form>
      </Container>

    </div>
  )
}

export default App;