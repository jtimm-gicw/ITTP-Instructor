"use strict";

/****************************************************
 STEP 7 — APPLICATION STATE
 ----------------------------------------------------
 This object represents the entire state of the app.
 Instead of saving many variables separately,
 we store everything inside one object.

 We will save this object to Local Storage.
*****************************************************/

let settings = {
  darkMode: false,
  open: null,
  comment: "",
};


/****************************************************
 BASIC DOM VARIABLES
 ----------------------------------------------------
 These are already provided so students can focus
 on the Local Storage logic instead of DOM setup.
*****************************************************/

let mode = document.getElementsByClassName("mode");
let details = document.getElementsByTagName("details");
let commentBox = document.getElementById("commentBox");
let openDetail = null;



/****************************************************
 STEP 8 — SAVE SETTINGS FUNCTION
 ----------------------------------------------------
 Goal:
Save the settings object to Local Storage.

Key Concept:
Local Storage only stores STRINGS.

So we must convert the settings object into JSON.
*****************************************************/

// function saveSettings() {

//   // Convert object → JSON string
//   let stringify = JSON.stringify(settings);

//   // Store JSON string in Local Storage
//   localStorage.setItem("settings", stringify);

//   console.log(stringify); // helpful for demo

// }



/****************************************************
 STEP 9 — LOAD SETTINGS FUNCTION
 ----------------------------------------------------
 Goal:
Retrieve stored settings from Local Storage.

Process:
1. Get stored JSON
2. Check if it exists
3. Convert JSON back to an object
*****************************************************/

// function loadSettings() {

//   let getSettings = localStorage.getItem("settings");

//   if (getSettings) {

//     console.log(getSettings); // JSON string

//     settings = JSON.parse(getSettings);

//     console.log(settings); // object restored

//   }

// }



/****************************************************
 STEP 10 — PAGE LOAD FUNCTION
 ----------------------------------------------------
 Goal:
When the page loads we want to restore
the saved state of the application.
*****************************************************/

// function pageLoad() {

//   let savedSettings = localStorage.getItem("settings");

//   // Guard clause
//   if (!savedSettings) {
//     return;
//   }

//   loadSettings();

//   // Restore Dark Mode
//   if (settings.darkMode) {
//     enterDarkMode();
//   } else {
//     enterLightMode();
//   }

//   // Restore Accordion State
//   if (settings.open !== null) {
//     details[settings.open].setAttribute("open", "open")
//   }

//   // Restore Comment Box
//   commentBox.value = settings.comment;

// }



/****************************************************
 DARK MODE FUNCTION
 ----------------------------------------------------
 During the demo we will add the line that
 saves the settings to Local Storage.
*****************************************************/

function enterDarkMode() {

  let body = document.body;
  let welcome = document.getElementById("welcome");
  let button = document.getElementById("darkButton");

  body.classList.remove("light");
  welcome.classList.remove("light");

  body.classList.add("dark");
  welcome.classList.add("dark");

  button.setAttribute("checked", "checked");

  // update application state
  settings.darkMode = true;

  // STEP 8 DEMO
  // saveSettings();

}



/****************************************************
 LIGHT MODE FUNCTION
*****************************************************/

function enterLightMode() {

  let body = document.body;
  let welcome = document.getElementById("welcome");
  let button = document.getElementById("lightButton");

  body.classList.remove("dark");
  welcome.classList.remove("dark");

  body.classList.add("light");
  welcome.classList.add("light");

  button.setAttribute("checked", "checked");

  // update application state
  settings.darkMode = false;

  // STEP 8 DEMO
  // saveSettings();

}



/****************************************************
 DARK/LIGHT MODE EVENT LISTENERS
*****************************************************/

for (let i = 0; i < mode.length; i++) {

  mode[i].addEventListener("click", function () {

    if (this.value === "dark") {
      enterDarkMode();
    }

    if (this.value === "light") {
      enterLightMode();
    }

  });

}



/****************************************************
 STEP — SAVE OPEN ACCORDION SECTION
 ----------------------------------------------------
 Goal:
Remember which accordion section is open.

During the demo we will highlight how
the state object updates and is saved.
*****************************************************/

// for (let i = 0; i < details.length; i++) {

//   details[i].addEventListener("click", function () {

//     // guard clause
//     if (settings.open === i) {
//       settings.open = null;
//       saveSettings();
//       return;
//     }

//     openDetail = i;
//     settings.open = i;

//     saveSettings();

//     // close other details
//     for (let j = 0; j < details.length; j++) {

//       if (j !== openDetail) {
//         details[j].removeAttribute("open");
//       }

//     }

//   });

// }



/****************************************************
 STEP — SAVE COMMENT TEXT
 ----------------------------------------------------
 Goal:
Save comment text as the user types.

Key concept:
The "input" event fires every time
the user changes the text box.
*****************************************************/

// commentBox.addEventListener("input", function () {

//   settings.comment = commentBox.value;

//   saveSettings();

// });



/****************************************************
 STEP 10 — PAGE LOAD
 ----------------------------------------------------
 At the end of the demo we will enable this
 so the app restores saved settings
 when the page reloads.
*****************************************************/

// pageLoad();