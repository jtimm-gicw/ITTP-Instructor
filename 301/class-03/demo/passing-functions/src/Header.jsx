import Navbar from 'react-bootstrap/Navbar';

function Header(props) {

  // 🔹 Simple component showing props usage
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <h1>
          {/* Display title passed from App */}
          {props.title}
        </h1>
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;