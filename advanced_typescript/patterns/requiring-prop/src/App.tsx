import { useState } from "react";
import "./App.css";
import TextPan from "./components/TextPan";

function App() {
  const [expanded, setExpanded] = useState(false);
  const dummyText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit diam ac odio iaculis, ut volutpat odio ullamcorper. Nulla bibendum malesuada elit, nec gravida urna tincidunt eu. Nulla id tincidunt ligula. Curabitur eget odio ut nisi ullamcorper cursus eu at tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam a fringilla nulla. Vivamus et convallis libero. Cras id augue eu velit mattis fringilla vel nec nunc. Sed fringilla ex sit amet quam consequat, in laoreet dui interdum. Sed eget ex eu dolor condimentum interdum. Duis sit amet tincidunt turpis. Sed sed risus sed arcu tristique iaculis vel et metus. Suspendisse potenti. Aliquam non metus a mi cursus lacinia.";

  return (
    <div className="container">
      <TextPan id={"text-id"} short expanded={expanded}>
        {dummyText}
      </TextPan>
      <section style={{ marginTop: "1em" }}>
        <button
          className={expanded ? "secondary" : "primary"}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Shorten" : "Expand"}
        </button>
      </section>
    </div>
  );
}

export default App;
