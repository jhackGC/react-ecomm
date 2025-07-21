import React from "react"; // import React library
import ReactDOM from "react-dom/client"; // import ReactDOM for rendering
import Pizza from "./Pizza.jsx"; // import the Pizza component

const App = () => {
  return (
    <div>
      <h1>Pixel Perfect Pizzas</h1>
      <Pizza /> {/* React tries to run the function and get the return value */}
      <Pizza name="Hawaiian Pizza" ingredients={["Ham", "Pineapple"]} />{" "}
      {/* passing props */}
      <Pizza name="Pepperoni Pizza" /> {/* passing props */}
    </div>
  );
};

const container = document.getElementById("root"); // where we want to render our React app
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
