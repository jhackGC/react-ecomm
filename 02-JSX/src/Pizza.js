import React from "react"; // import React library

// plain react functional component
// This is a pure React example without any build tools or JSX
const Pizza = (
  props, // props are passed in as an argument
) => {
  const name = props.name || "Cheese Pizza"; // default to Cheese Pizza if no name prop is passed
  return React.createElement("div", {}, [
    React.createElement("h2", {}, name),
    React.createElement("p", {}, "Delicious pizza made with love."),
    React.createElement(
      "ul",
      {},
      props.ingredients
        ? props.ingredients.map((ingredient) =>
            React.createElement("li", {}, ingredient),
          )
        : React.createElement("li", {}, "No ingredients provided"),
    ),
  ]);
};

export default Pizza; // export the component so it can be used in other files
