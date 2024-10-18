import React from "react";
import ReactDOM from "react-dom/client";

//JSX

const heading = <h1>Namaste React using JSX</h1>;
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

//React Component
//class based component --> old way
//functional component --> new way

//React Functional Component --> A normal JS function

const TitleComponent = () => {
  return <h1>Title from Namaste React</h1>;
};
// const HeadingComponent = () => {
//   <TitleComponent />;
//   return <h1>Namaste React Functional Component</h1>;
// };

const number = 1000;
//Another way of writing without return
const HeadingComponent = () => (
  <div id="container">
    {heading}
    <TitleComponent />
    <TitleComponent></TitleComponent>
    {TitleComponent()}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

root.render(<HeadingComponent />);
