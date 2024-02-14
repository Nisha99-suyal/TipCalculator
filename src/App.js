import "./App.css";
import { useState } from "react";
import Bill from "./components/Bill";
import SelectedPercentage from "./components/SelectedPercentage";

function App() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);
  function handlerReset() {
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div className="App">
      <h2>🤔🤔 Tip Calculator 😉✌</h2>
      <Bill bill={bill} setBill={setBill} />
      <SelectedPercentage
        percentage={percentage1}
        setPercentage={setPercentage1}
      >
        How did you like the service?
      </SelectedPercentage>
      <SelectedPercentage
        percentage={percentage2}
        setPercentage={setPercentage2}
      >
        How did your friend like the service?
      </SelectedPercentage>
      <h3>
        You Pay ${bill + tip} (${bill} + ${tip} tip)
      </h3>
      <button onClick={handlerReset}>Reset</button>
    </div>
  );
}

export default App;
