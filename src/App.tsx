import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  return (
    <div className="card">
      <input
        ref={(inputElement) => {
          if (!inputElement) return;
          inputElement.focus();
          inputElement.select();
        }}
        value={data}
        onChange={(data) => {
          setData(data.currentTarget.value);
        }}
      />
    </div>
  );
}

export default App;
