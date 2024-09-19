import { useState } from "react";
import List from "./components/list";
import "./components/input.css";

export default function App() {
  const [input, setInput] = useState("");
  const [name, setname] = useState([
    "Mouse",
    "Keyboard",
    "Monitor",
    "Mic",
    "Camera",
    "Headphone",
    "Speaker",
    "Laptop",
    "Tablet",
    "Smartphone",
    "Smartwatch",
    "Fitness Tracker",
    "Gaming Console",
    "VR Headset",
    "Drone",
  ]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const filteredname = name.filter((item) =>
    item.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div>
      <input
        className="inputt"
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="name..."
      />
      <ul>
        {filteredname.map((item, index) => (
          <List key={index} list={item} />
        ))}
      </ul>
    </div>
  );
}
