import logo from './logo.svg';
import './App.css';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

function App() {
  return (
    <>
    <div className="weather-app">
      <div className="search-box">
        <input type="text" className="city-search-input" placeholder="Enter city..."/>
        <br/>
        <button><span className="search-icon">🔍</span></button>
      </div>
    </div>

    </>
  );
}

export default App;
