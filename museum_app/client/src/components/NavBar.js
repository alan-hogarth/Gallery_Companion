import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div className="navContainer">
      <ul className="nav">
        <li>
          <Link className="navLink" to="/">Gallery</Link>
        </li>
        <li>
          <Link className="navLink" to="/favourites">Favourites</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;