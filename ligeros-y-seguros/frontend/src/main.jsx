import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";
    fetch(`${apiUrl}/`)
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

