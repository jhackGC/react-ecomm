// JSX functional component
const Pizza = (
  props, // props are passed in as an argument
) => {
  const name = props.name || "Cheese Pizza"; // default to Cheese Pizza if no name prop is passed
  return (
    <div className="pizza">
      <h2>{name}</h2>
      <p>Delicious pizza made with love.</p>
      <ul>
        {props.ingredients ? (
          props.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))
        ) : (
          <li>No ingredients provided</li>
        )}
      </ul>
    </div>
  );
};

export default Pizza; // export the component so it can be used in other files
