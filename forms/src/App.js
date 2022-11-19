import {useState} from 'react';

function App() {
  const [name, setName] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault(); //prevents refreshing the page by calling the root
    setName(""); //this will clear out the input box
    console.log("Submission Sucessfull");
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
            <label htmlFor="name">Name: </label>
            <input
              id='name'
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <button disabled={!name} type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
