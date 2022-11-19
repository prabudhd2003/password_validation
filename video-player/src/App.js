import './App.css';
//npm install react-player
import React from 'react';
import ReactPlayer from "react-player";

function App() {
  return (
    <div>
      <MyVideo />
    </div>
  );
};

const MyVideo = () =>{
  return(
    <ReactPlayer url = 'https://youtu.be/6m-j_xFF-EY' height={600} width={400} controls />
  );
};

export default App;
