import ReactDOM from "react-dom/client"; // import ReactDOM for rendering
import Pizza from "./Pizza.jsx"; // import the Pizza component

const App = () => {
  return (
    <div>
      <h1>Pixel Perfect Pizzas</h1>
      <Pizza image={"/public/pizzas/pepperoni.webp"} />
      {/* React tries to run the function and get the return value */}
      <Pizza
        name="Hawaiian Pizza"
        ingredients={["Ham", "Pineapple"]}
        image={"/public/pizzas/hawaiian.webp"}
      />{" "}
      {/* passing props */}
      <Pizza
        name="Pepperoni Pizza"
        image={"/public/pizzas/pepperoni.webp"}
      />{" "}
      {/* passing props */}
    </div>
  );
};

export default App; // export the App component so it can be used in other files
const container = document.getElementById("root"); // get the root element from the HTML
const root = ReactDOM.createRoot(container);
root.render(<App />);
