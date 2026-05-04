import teen from './assets/teen.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Child(props) {

  /*
    🔹 FUNCTION: asks parent for $10
    Calls the function passed from Parent
  */
  function askParentFor10Dollars() {
    props.askForMoney(10);
  }

  /*
    🔹 FUNCTION: asks parent for $20
  */
  function askParentFor20Dollars() {
    props.askForMoney(20);
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={teen} />

      <Card.Body>
        <Card.Title>Billy</Card.Title>

        {/* Display data received from parent */}
        <Card.Text>
          I am Billy. I have {props.billysMoney} dollars.
        </Card.Text>

        {/* 
          🔹 BUTTONS trigger functions
          These functions call the parent function
        */}
        <Button 
          onClick={askParentFor10Dollars} 
          variant="primary"
        >
          Ask parent for 10 dollars
        </Button>

        <Button 
          onClick={askParentFor20Dollars} 
          variant="primary"
        >
          Ask parent for 20 dollars
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Child;