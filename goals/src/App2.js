import { useState } from "react";


function App() {
  const [goals, setGoals] = useState("");
  const [by, setBy] = useState("");
  
  function ListofGoals() {
    return (
      <ul>
        <li>
          <span>{goals} {by}</span>
        </li>
      </ul>
    )
  }
  
  const handleClick = (e) => {
    e.preventDefault();
    setGoals("")
    setBy("")
  }
  
  return (
    <div className="App">
      <form>
        <fieldset>
          <h1>My goals</h1>
          <input
            type="text"
            placeholder="My Goals"
            value={goals}
            onChange={(e) => {
              setGoals(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="by"
            value={by}
            onChange={(e) => {
              setBy(e.target.value);
            }
            }
          />
          <button onClick={handleClick}>Submit</button>
        </fieldset>
      </form>
      <ListofGoals />
    </div>
  );
}

export default App;
