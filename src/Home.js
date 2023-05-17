import { Outlet, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <p>[11:04] Diane Robert</p>
      <h1>WELCOME</h1>
      <NavBar />
    </>
  );
}

export function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/page1">page1</NavLink>
          </li>
          <li>
            <NavLink to="/page2">page2</NavLink>
          </li>
          <li>
            <NavLink to="/TodoList">TodoList</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
