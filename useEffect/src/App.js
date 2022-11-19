import React from 'react';

function App() {
  const[toggle,setToggle] = React.useState(false);

  const clickHandler = () =>{
    setToggle(!toggle)
  }
  React.useEffect(() =>{
    console.log("The value of the toggled variable",toggle);
  }, [])

  return (
    <div>
      <h1>Using the useEffect hook</h1>
      <button onClick={clickHandler}>
        Toggle Message
      </button>
      {toggle && <h2>Hello</h2>}
    </div>
  );
}

export default App;
