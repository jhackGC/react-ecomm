import { useEffect, useState } from "react";
import Cart from "../../06-Handling user input/src/Cart";
import Pizza from "./Pizza";

// feel free to change en-US / USD to your locale
const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Order() {
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  // Derivative state
  // This is not stored in the state, but derived from the other state variables
  // this is a common pattern in React, where you compute values based on other state variables
  // it helps to keep the state clean and avoid unnecessary re-renders
  let price, selectedPizza;
  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
    price = intl.format(
      selectedPizza.sizes ? selectedPizza.sizes[pizzaSize] : "",
    );
  }

  // Fetch pizza types from the API when the component mounts
  // This is a side effect, so we use useEffect to handle it
  // The empty dependency array means this effect runs only once, after the FIRST render
  // similar to componentDidMount.
  // We also set loading to false once the data is fetched
  // to indicate that the data is ready to be displayed
  // This is a common pattern in React to handle data fetching
  // and to avoid showing loading state indefinitely
  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  // if you would like to run something at the end of the component lifecycle,
  // you can return a cleanup function from useEffect
  // useEffect(() => {
  //   fetchPizzaTypes();
  //   return () => {
  //     // cleanup code here, if needed
  //     // for example, you can cancel the fetch request if it's still pending
  //     // or clear any timers or subscriptions
  //     // this is useful to avoid memory leaks or unwanted side effects
  //     clearTimeout(timeoutId);
  //   };
  // }, []);

  async function fetchPizzaTypes() {
    const pizzasRes = await fetch("/api/pizzas");
    const pizzasJson = await pizzasRes.json();
    setPizzaTypes(pizzasJson);
    setLoading(false);
  }

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // Add the selected pizza to the cart
          setCart((cart) => [
            ...cart, // spread the existing cart items
            {
              pizza: selectedPizza,
              size: pizzaSize,
              price,
            },
          ]);
          // Reset the form fields
          setPizzaType("pepperoni");
          setPizzaSize("M");
        }}
      >
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              onChange={(e) => setPizzaType(e.target.value)}
              name="pizza-type"
              value={pizzaType}
            >
              {pizzaTypes.map((pizza) => (
                <option key={pizza.id} value={pizza.id}>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input
                  onChange={(e) => setPizzaSize(e.target.value)}
                  checked={pizzaSize === "S"}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  onChange={(e) => setPizzaSize(e.target.value)}
                  checked={pizzaSize === "M"}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  onChange={(e) => setPizzaSize(e.target.value)}
                  checked={pizzaSize === "L"}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
        </div>
        {loading ? (
          <h3>LOADING PIZZA …</h3>
        ) : (
          <div className="order-pizza">
            <Pizza
              name={selectedPizza.name}
              description={selectedPizza.description}
              image={selectedPizza.image}
            />
            <p>{price}</p>
          </div>
        )}
      </form>
      {loading ? (
        <h2>LOADING …</h2>
      ) : (
        <Cart
          cart={cart}
          checkout={() => alert("Checkout not implemented yet")}
        />
      )}
    </div>
  );
}
