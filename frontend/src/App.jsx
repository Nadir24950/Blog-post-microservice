import Nav from "./components/Nav";
import Home from "./components/Home";
import Create from "./components/Create";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
