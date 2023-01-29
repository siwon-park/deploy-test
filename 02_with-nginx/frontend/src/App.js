import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          안녕하세요? 코치 세션 재밌으신가요?
        </p>
        <a
          className="App-link"
          href="https://edu.ssafy.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SSAFY
        </a>
      </header>
    </div>
  );
}

export default App;
