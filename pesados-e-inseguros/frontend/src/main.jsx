import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h1>Frontend conectado al Backend</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

