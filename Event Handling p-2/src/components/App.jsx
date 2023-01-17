import React, { useState } from "react";

function App() {
  const [isHovered, setHovered] = useState(false);
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function clickHandler(event) {
    console.log("clicked");

    setHeading(name);
    event.preventDefault();
  }

  function changeHandler(event) {
    setName(event.target.value);
  }

  function handleMouseOver() {
    setHovered(true);
  }

  function handleMouseOut() {
    setHovered(false);
  }

  return (
    <div className="container">
      <form onChange={changeHandler}>
        <h1>Hello {headingText} </h1>
        <input
          onChange={changeHandler}
          type="text"
          placeholder="What's your name?"
        />
        <button
          style={{ backgroundColor: isHovered ? "black" : "white" }}
          onMouseOut={handleMouseOver}
          onMouseOver={handleMouseOut}
          onClick={clickHandler}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
