import Nav from "./components/Nav";
import Home from "./components/Home";

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
