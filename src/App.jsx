import "./App.css";
import Balance from "./components/Balance";
import Spending from "./components/Spending";

function App() {
  return (
    <div className="main container">
      <Balance />
      <Spending />
    </div>
  );
}

export default App;
