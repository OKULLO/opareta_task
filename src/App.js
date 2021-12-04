import "./styles.css";
import InputComponent from "./input";

const App = () => {
  const value = false; //repalce variable with [1,31,2,3],or any other
  return (
    <div className="App">
      <InputComponent input={value} />
    </div>
  );
};
export default App;
