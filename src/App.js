import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome to Spark
        </p>
        <a
          className="App-link"
          href="https://www.archisacademy.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Archi's 
        </a>
      </header>
    </div>
  );
}

export default App;
