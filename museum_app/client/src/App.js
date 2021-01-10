import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FavouriteContainer from "./containers/FavouriteContainer";
import GalleryContainer from './containers/GalleryContainer';
import NavBar from "./components/NavBar";


function App() {

  return (
    <Router>
      <NavBar /> 
      <Route exact path ="/" component={GalleryContainer} />
      <Route exact path ="/favourites" component={FavouriteContainer} />
    </Router>

  )
}

export default App;