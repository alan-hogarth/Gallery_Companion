import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div class="navContainer">
    <ul class="nav">
      <li>
        <Link class="navLink" to="/">Gallery</Link>
      </li>
      <li>
        <Link class="navLink" to="/favourites">Favourites</Link>
      </li>
      <li>
        <Link class="navLink" to="/quiz">Quiz</Link>
      </li>
    </ul>
    </div>
  );
}

export default NavBar;