import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [advice, setAdvice] = useState({
    id: "",
    advice: "Click dice to get advice!",
  });

  function handleClick() {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setAdvice(data.slip))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <div className="quote-container">
        <h3 className="quote-number">ADVICE #{advice.id}</h3>
        <p className="quote-text">{advice.advice}</p>
        <img className="divider" src="/images/divider.svg" alt="divider" />
        <br />
        <button className="dice-wrapper rounded-circle" onClick={handleClick}>
          <img className="dice-img" src="/images/dice.svg" alt="dice" />
        </button>
      </div>
    </div>
  );
}
