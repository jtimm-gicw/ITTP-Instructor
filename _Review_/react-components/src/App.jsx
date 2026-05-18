import Header from './Header';
import Footer from './Footer';
import Greeting from './Greeting';
import Counter from './Counter';

function App() {
  return (
    <>
      <Header />
      <h1>Hello React!</h1>

      <Greeting name="Jason" />
      <Greeting name="Student" />

      <Counter />

      <Footer />
    </>
  );
}

export default App;
