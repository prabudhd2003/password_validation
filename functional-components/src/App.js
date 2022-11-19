import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
    <Header name="Anna" color="purple" />
    <div>
    <Main greet="Howdy"/>
    <Sidebar greet="Hi"/>
    </div>
    </div>
  )
}

export default App;
