import { createContext } from "react";

// Create a context for the cart
// The default value is an empty array and a function to update the cart
// This will be used to provide the cart state and a function to update it to the components
// that need it, such as Header and Order components
// The useContext hook will be used to access the cart state and the function to update it
// in the components that need it
// The CartContext will be used to share the cart state across components without having to pass props
// down manually at every level
// This is useful for larger applications where the cart state needs to be accessed by many components
// and passing props down manually would be cumbersome

// Create a state that is both mutable and readable
// that would be the definition of a hook
const cart = []; // the state of the cart, initially an empty array
const mutatingFunction = () => {};
const hook = [cart, mutatingFunction];
export const CartContext = createContext(hook);
