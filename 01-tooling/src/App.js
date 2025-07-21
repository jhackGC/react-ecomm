import React from "react"; // import React library
import ReactDOM from "react-dom/client"; // import ReactDOM for rendering


const App = () => {
  return React.createElement(
    "div", // the type of element
    {}, // props/attributes
    [
      React.createElement("h1", {}, "Pixel Perfect Pizzas"),
      React.createElement(Pizza), // React tries to run the function and get the return value
      React.createElement(Pizza, {
        name: "Hawaiian Pizza",
        ingredients: ["Ham", "Pineapple"],
      }), // passing props
      React.createElement(Pizza, { name: "Pepperoni Pizza" }), // passing props
    ], // children
  );
};

const container = document.getElementById("root"); // where we want to render our React app
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
