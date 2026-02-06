import jsxIco from "./assets/jsx-ui.png";
import Header from "./components/Header.jsx";
import { EXAMPLES } from "./data.js";
import CoreConcepts from "./components/CoreConcepts.jsx";
import "./components/Header.css";
import TabButton from "./components/TabButton.jsx";
import { Fragment, useState } from "react";
import Example from "./components/Example.jsx";
import Slider from "./components/Slider.jsx";
function App() {
  // palindrome string
  function isPalindrome(str) {
    let revStr = ""; //madam //racecar
    for (let i = str.length - 1; i >= 0; i--) {
      revStr += str[i];
    }
    return revStr == str ? true : false;
  }
  console.log(isPalindrome("racecars"));
  return (
    <>
      <header>
        <h1>Welcome to React tuorial!</h1>
        <div>Check palendrom from usr</div>
        <input type="text" className="form-control" />
      </header>
      <Header />
      <Slider />
      <h2>Core CoreConcepts</h2>
      <CoreConcepts />
      <menu>
        Example componennt
        <Example />
      </menu>
    </>
  );
}

export default App;
