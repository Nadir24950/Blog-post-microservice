const Nav = () => {
    return (
        <nav className="navbar">
            <h1>Nadir's Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="./create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Blog</a>
            </div>
        </nav>
    );
}

export default Nav;