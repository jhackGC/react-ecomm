import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Order from "./Order.jsx";
import PizzaOfTheDay from "./PizzaOfTheDay.jsx";
const App = () => {
  return (
    <StrictMode>
      <div>
        <h1 className="logo">Padre Gino's - Order now</h1>
        <Order />
        <PizzaOfTheDay />
      </div>
    </StrictMode>
  );
};

export default App; // export the App component so it can be used in other files
const container = document.getElementById("root"); // get the root element from the HTML
const root = ReactDOM.createRoot(container);
root.render(<App />);
