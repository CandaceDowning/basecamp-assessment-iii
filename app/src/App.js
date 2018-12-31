import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="things">
        <ul>
          <li><a href="https://commons.wikimedia.org/wiki/File:Cucciolo_gatto_Bibo.jpg"> CUTE</a></li>
          <li><a href="https://commons.wikimedia.org/wiki/File:Northern_Stargazer.JPG">CREEPY</a></li>
          <li><a href="https://commons.wikimedia.org/wiki/File:Wolfspinne1.jpg">SCARY</a></li>
          <li className="siteName"> CUTE CREEPY SCARY</li>
        </ul>
        <header className="cute">
          <a
           className="cuteLink"
           href="https://commons.wikimedia.org/wiki/File:Cucciolo_gatto_Bibo.jpg"
           >
            CUTE
          </a>
        </header>
        <div className="creepy">
          <p>
            So, you like cute? Can you handle creepy? Check it out:
          </p> 
          <a
           className="creepyLink"
           href="https://commons.wikimedia.org/wiki/File:Northern_Stargazer.JPG"
            >
            CREEPY
          </a>
          <p>
            If you are really brave, you should check out what is hiding at the bottom...
          </p>
        </div>
        <footer className="scary">
          <a
           className="scaryLink"
           href="https://commons.wikimedia.org/wiki/File:Wolfspinne1.jpg"
            >
            SCARY
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
