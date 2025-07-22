// time to move this to a hook or util function
const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD", // feel free to change to your local currency
});

export default function Cart({ cart, checkout }) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const current = cart[i];
    total += current.pizza.sizes[current.size];
  }
  // you also can use a reduce function to calculate the total. but reducers are usually fancy but,
  // less readable ...
  // total = cart.reduce((acc, item) => acc + item.pizza.sizes[item.size], 0);
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span className="size">{item.size}</span> –
            <span className="type">{item.pizza.name}</span> –
            <span className="price">{item.price}</span>
          </li>
        ))}
      </ul>
      <p>Total: {intl.format(total)}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}
