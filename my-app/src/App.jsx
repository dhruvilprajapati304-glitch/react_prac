import Props from "./Props";

function App() {
  let name = "dhp";
  let obj = { name: "dhp", age: 21 };

  return (
    <div>
      <Props name = {name} obj = {obj} />
    </div>
  );
}

export default App;