import "bootstrap//dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  let foodItems = [];
  // let foodItems = ["fish", "green vegetables", "Egg", "salad", "Milk"];
  if ((foodItems, length === 0)) {
    return <h3>I am still Hungry</h3>;
  }
  return (
    <>
      <h1> Healthy Food</h1>
      {foodItems.length === 0 && <h3> i am still hingrey</h3>}
      <ul className="list-group">
        {foodItems.map((item) => {
          <li key={item} className="list-group-item">
            {item}
          </li>;
        })}
      </ul>
    </>
  );
}

export default App;
