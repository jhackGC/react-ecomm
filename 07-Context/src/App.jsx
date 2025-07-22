import { StrictMode, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import Order from "./Order.jsx";
import PizzaOfTheDay from "./PizzaOfTheDay.jsx";
import { CartContext } from "./contexts.jsx";

const App = () => {
  // no need to destructure the hook here, as we will use it directly in the context provider
  const cartHook = useState([]); // Initialize the cart state with an empty array
  return (
    <StrictMode>
      <CartContext.Provider value={cartHook}>
        {/* The CartContext.Provider is used to provide the cart state to the components */}
        <div>
          <Header />
          <Order />
          <PizzaOfTheDay />
        </div>
      </CartContext.Provider>
    </StrictMode>
  );
};

export default App; // export the App component so it can be used in other files
const container = document.getElementById("root"); // get the root element from the HTML
const root = ReactDOM.createRoot(container);
root.render(<App />);
