import React from "react"
import './App.css';
import Header from "./components/header.js";
import Main from "./components/main.js"
import Section from "./components/section.js";
import Contact from "./components/contact.js";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Section></Section>
      <Contact></Contact>
    </div>
  );
}

export default App;
