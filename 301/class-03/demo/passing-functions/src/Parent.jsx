import { useState } from 'react';
import Child from './Child';
import mom from './assets/mom.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Parent(props) {

  // 🔹 STATE: how much Billy has
  const [billysMoney, setBillysMoney] = useState(0);

  // 🔹 STATE: how much parent has
  const [money, setMoney] = useState(100);

  /*
    🔹 FUNCTION: handles giving money to Billy
    This function:
    1. Updates Billy's money
    2. Updates Parent's money
    3. Checks for overdraft
  */
  function giveMoneyToBilly(dollars) {
    const parentBalance = money - dollars;

    // Update Billy's money
    setBillysMoney(billysMoney + dollars);

    // Update Parent's money
    setMoney(parentBalance);

    // 🔹 If parent goes below 0, notify App
    if (parentBalance < 0) {
      props.onOverdraft(); // function from App
    }
  }

  return (
    <CardGroup>

      {/* Parent Card */}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={mom} />
        <Card.Body>
          <Card.Title>Parent</Card.Title>
          <Card.Text>
            I am the parent. I have {money} dollars.
          </Card.Text>
        </Card.Body>
      </Card>

      {/* 
        🔹 Passing BOTH:
        1. Function → allows child to request money
        2. Data → shows Billy's current money
      */}
      <Child
        askForMoney={giveMoneyToBilly}
        billysMoney={billysMoney} // ✅ FIXED
      />

    </CardGroup>
  );
}

export default Parent;