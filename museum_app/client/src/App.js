import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FavouriteContainer from "./containers/FavouriteContainer";
import GalleryContainer from './containers/GalleryContainer';


function App() {

  return (
    <Router>
      
      <Route exact path ="/" component={GalleryContainer} />
      <Route exact path ="/favourites" component={FavouriteContainer} />
    </Router>

  )
}

export default App;