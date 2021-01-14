import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <>
    <h2 className="mainTitle">Art Companion</h2>
    <div className="navContainer">
      <ul className="nav">
        <li>
          <Link className="navLink" to="/">Gallery</Link>
        </li>
        <li>
          <Link className="navLink" to="/favourites">Favourites</Link>
        </li>
        <li>
          <Link className="navLink" to="/quiz">Quiz</Link>
        </li>
      </ul>
    </div>
    
    </>
  );
}

export default NavBar;