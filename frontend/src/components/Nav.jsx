import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <h1>Nadir's Blog</h1>
      <div className="links">
        <Link
          to="/"
          style={{
            marginLeft: "16px",
            textDecoration: "none",
            padding: "6px",
          }}
        >
          Home
        </Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "orange",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
