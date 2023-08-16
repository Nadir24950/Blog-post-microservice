import { Link, useRouteError } from "react-router-dom";
import "../../src/index.css";
import Nav from "./Nav";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <Nav></Nav>
      <div className="not-found">
        <h2>Sorry</h2>
        <p>That page cannot be found</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">Back to the homepage</Link>
      </div>
    </>
  );
};

export default NotFound;
