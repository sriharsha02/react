import React from "react";
import ReactDOM from "react-dom/client";

//React Element --> Object --> HTML Element (rendering to DOM)
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

//JSX

const jsxHeading = <h1>Namaste React using JSX</h1>;

console.log(jsxHeading);
root.render(jsxHeading);
