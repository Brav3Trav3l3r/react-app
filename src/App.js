import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("hELLO");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className=" p-4">
      <input
        className="border-2"
        type="text"
        value={value}
        onChange={handleChange}
      />

      <h1>{value}</h1>
    </div>
  );
}
