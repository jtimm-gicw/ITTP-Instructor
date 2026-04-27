// LAB 01 - FEATURE TASKS
// Your Header component needs to have an <h1> with a title.

// LAB 02 - STRETCH GOAL
// When the user clicks on elements such as the header, footer or title of page, make something change using state.
// You can update the words, change the styles or add something new. Be creative.

import { useState } from 'react';

function Header() {

  const [colorSwitch, setColorSwitch] = useState(true);

  function changeColor() {
    setColorSwitch(!colorSwitch);
  }

  return (
    <div onClick={(changeColor)}>
      {colorSwitch ?
        <h1 className="purpleHeader">🤘 Gallery of Horns 🤘</h1>
        :
        <h1 className="blueHeader">🤘 Gallery of Horns 🤘</h1>
      }
    </div>
  );

}

export default Header;
