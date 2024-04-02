import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Header on the top</h1>
      <Outlet />
      <h3>footer on the bottom</h3>
      {["home", "about", `contact/${Math.floor(Math.random() * 10)}`].map(
        (button) => (
          <button
            onClick={() => navigate(`/${button}`, { state: `${button} data` })}
          >
            click to {button}
          </button>
        )
      )}
      {["home", "about", `contact/${Math.floor(Math.random() * 10)}`].map(
        (button) => (
          <Link to={button} state={`${button} data` }>
            <button>click to {button}</button>
          </Link>
        )
      )}
    </>
  );
}

export default App;
