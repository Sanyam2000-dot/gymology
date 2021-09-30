import "./App.css";
import { useState } from "react";
import GymData from "./GymData";

function App() {
  const [item, setItem] = useState("Exercises");
  const select = (item) => {
    setItem(item);
  };
  return (
    <>
      <div className="App">
        <h1 style={{ fontSize: "2.5rem" }}>Gymology</h1>
        {Object.keys(GymData).map((data) => (
          <button className="buttons" onClick={() => select(data)}>
            {data}
          </button>
        ))}
      </div>

      <div
        style={{
          width: "50%",

          margin: "auto",
        }}
      >
        <div>
          <ul
            style={{
              paddingInlineStart: "0",
              textAlign: "center",
              margin: "auto",
            }}
          >
            {GymData[item].map((tools) => (
              <li
                key={tools.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid black",
                  width: "90%",
                  marginBottom: "1rem",
                  fontSize: "1.5rem",
                  backgroundColor: "#fff5ee",

                  borderRadius: "0.5rem",
                }}
              >
                {tools.name}{" "}
                <div style={{ fontWeight: "lighter", fontStyle: "italic" }}>
                  {" "}
                  {tools.description}{" "}
                </div>
                <div style={{ fontWeight: "lighter" }}> {tools.rating} </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
