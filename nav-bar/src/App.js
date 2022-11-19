import HomePage from './HomePage';
import AboutMe from './AboutMe';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
// npm install react-router-dom@6
//in index.js wrap app with<BrowserRouter> after importing import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="HomePage">
      <nav className="nav">
        <Link to ="/" className="nav-item">HomePage</Link>
        <Link to = "/about-me" className="nav-tem">About Me</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
