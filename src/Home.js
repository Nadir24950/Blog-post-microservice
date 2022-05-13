import { useState } from "react";

const Home = () => {
    const [name, setName] = useState("Sabrina");

    const handleClick = (name) => {
        //console.log("Hello It's me " + name);
        //useState[name] = 
        setName(name)
    }

    return (
        <div className="home">
            <h2>Homepage </h2>
            <p>My name is { name }</p>
            <button onClick={() => {handleClick("Nadir")}}>Click me to change the name</button>
        </div>
    );
}

export default Home;