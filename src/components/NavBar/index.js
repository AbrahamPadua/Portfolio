import { Bars } from "./NavElems";
import "../../styles/nav.scss";
// SVGS
import { ReactComponent as Bracket } from "../../left_bracket.svg";

const NavBar = () => {
  const hideNav = () => {
    document.querySelectorAll(".active").forEach(el => el.classList.remove("active"));
  }

  return (
    <div className="navWrapper">
      <nav className="navbar">
        <ul className="navlinks">
          <li onClick={() => { hideNav() }}>
            <Bracket />
            <p>Home</p>
            <Bracket className="second" />
          </li>
          <li onClick={() => { hideNav() }}>
            <Bracket />
            <p>Journey</p>
            <Bracket className="second" />
          </li>
          <li onClick={() => { document.querySelector("#contact").classList.add("show"); hideNav() }}>
            <Bracket />
            <p>Contact</p>
            <Bracket className="second" />
          </li>
        </ul>
      </nav>
      <Bars />
    </div>
  );
};

export default NavBar;
