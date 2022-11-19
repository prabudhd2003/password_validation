import './App.css';
import ReactDOM from 'react-dom';
import { Routes, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <div className="HomePage">
        <nav className="nav">
          <Link to="/" className="nav-item" />
        </nav>
        <Routes>
          <Route path="/" element={<NavBar />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
