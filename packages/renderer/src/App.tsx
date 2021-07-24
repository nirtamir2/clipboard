import React, { useState } from "react";
import "./App.css";
import { useElectron } from "/@/use/electron";

const { clipboard } = useElectron();

function App(): JSX.Element {
  const [count, setCount] = useState("");

  React.useEffect(() => {
    clipboard.startListening();
    clipboard.addListener((text) => {
      setCount(text);
    });

    return () => {
      clipboard.stopListening();
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>count is: {count}</p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
