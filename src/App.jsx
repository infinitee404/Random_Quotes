import React, {useState, useEffect} from "react";
import axios from "axios";
import "./styles.css"

const App = () => {
    const [advice, setAdvice] = useState("");
  
    async function generateMore() {
      try {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
      } catch (error) {
        console.log("Error occurred while fetching advice:", error);
      }
    }
  
    return (
      <div className="container">
        <h3 className="quote">{advice}</h3>
        <button className="generateButton" onClick={generateMore}>
          More Wisdom
        </button>
      </div>
    );
  };  

export default App