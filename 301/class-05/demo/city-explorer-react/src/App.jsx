/*
 =========================================================
 FILE: App.jsx
 =========================================================
 */

import Header from './Header';
import Footer from './Footer';
import Explorer from './Explorer';

function App() {

  return (

    <div className="App">

      {/* Header component */}
      <Header />

      {/* Main application logic lives here */}
      <Explorer />

      {/* Footer component */}
      <Footer />

    </div>
// NEXT GO TO:
//  -> Header.jsx
  );
}

export default App;