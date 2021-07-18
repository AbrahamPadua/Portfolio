import { Bars } from "./NavElems"
import "../../styles/nav.scss"

const NavBar = () => {
  return (
    <div className="navWrapper">
      <nav className="navbar">
        <ul className="navlinks">
          <li><a href="#About">About</a></li>
          <li><a href="#Portfolio">Portfolio</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
      <Bars />
    </div>
  )
}

export default NavBar
