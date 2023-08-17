import { useState } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useState("");
  if (token) {
    return <Login />;
  }
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
