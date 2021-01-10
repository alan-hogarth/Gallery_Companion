import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <ul>
      <li>
        <Link to="/">Gallery</Link>
      </li>
      <li>
        <Link to="/favourites">Favourites</Link>
      </li>
    </ul>
  );
}

export default NavBar;