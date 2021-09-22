import logo from "./books.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <Dictionary />
        <footer>
          {" "}
          <a
            href="https://github.com/Lilish-Warrior/dictionary-app"
            className="footer-link"
          >
            Open source code{" "}
          </a>{" "}
          by{" "}
          <a href="https://github.com/Lilish-Warrior" className="footer-link">
            Lilish Warrior{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
