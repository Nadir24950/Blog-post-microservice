import './App.css';
import Nav from './Nav';
import Home from './Home';

function App() {
  return (
    <div className='App'>
      <Nav></Nav>
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
