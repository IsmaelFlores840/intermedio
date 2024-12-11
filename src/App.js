import logo from "./logo.svg";
import ruleta from "./ruleta.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Timba
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </h2>
        <img
          src={ruleta}
          className="App-logo"
          alt="logo"
          // style={{ paddingBottom: "20px" }}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ paddingTop: "20px" }}
        >
          Intermedio
        </a>
      </header>
    </div>
  );
}

export default App;
