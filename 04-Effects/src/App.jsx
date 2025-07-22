import { StrictMode } from "react";
import ReactDOM from "react-dom/client"; // import ReactDOM for rendering
import Order from "./Order.jsx";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1>Pixel Perfect Pizzas</h1>
        <Order />
      </div>
    </StrictMode>
  );
};

export default App; // export the App component so it can be used in other files
const container = document.getElementById("root"); // get the root element from the HTML
const root = ReactDOM.createRoot(container);
root.render(<App />);
