// LAB01 - FEATURE TASKs
// Your App component should render a Header, Footer and Gallery component, each of which is defined in their own files.

import './App.css';
import Header from './Header';
import Gallery from './Gallery';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container fluid className="App">
      <Header />
      <Gallery />
      <Footer />
    </Container>
  );
}

export default App;
