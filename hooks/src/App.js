/*
import React, {useState} from 'react';
import Heading from './Heading';

function App() {

    const [word, setWord] = useState('Eat'); 

    function handleClick(){
      setWord('Drink');
    }
    function resetButton(){
      setWord('Eat');
    }

    return ( 
      <div className='App'> 
        <Heading message = {`${word} at Little Lemon`}/>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={resetButton}>Reset</button>
      </div> 
    ); 
  } 
export default App;
*/

import { useState } from "react"; 
 
export default function App() { 
  const [greeting, setGreeting] = useState( 
    { 
        greet: "Hello", 
        place: "World" 
    } 
  ); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { 
    setGreeting(prevState => { 
        return {...prevState, place: "World-Wide Web"} 
    }); 
  } 
 
  return ( 
    <div> 
      <h1>{greeting.greet}, {greeting.place}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
} 