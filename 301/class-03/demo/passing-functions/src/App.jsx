import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Parent from './Parent';
import Header from './Header';
import OverdraftModal from './OverdraftModal';

function App() {

  // 🔹 STATE: controls whether the modal is visible
  const [showOverdraftWarning, setShowOverdraftWarning] = useState(false);

  // 🔹 FUNCTION: called when overdraft happens
  // This will be passed DOWN to Parent
  function overdraftHandler() {
    setShowOverdraftWarning(true);
  }

  // 🔹 FUNCTION: closes the modal
  function closeHandler() {
    setShowOverdraftWarning(false);
  }

  return (
    <Container>
      {/* Static header */}
      <Header title={'Billy is a teenager'} />

      {/* 
        🔹 Passing function DOWN to Parent
        Parent will call this if money goes below 0
      */}
      <Parent onOverdraft={overdraftHandler} />

      {/* 
        🔹 Modal controlled by App state
        show → controls visibility
        onClose → function to close modal
      */}
      <OverdraftModal 
        show={showOverdraftWarning} 
        onClose={closeHandler} 
      />
    </Container>
  );
}

export default App;