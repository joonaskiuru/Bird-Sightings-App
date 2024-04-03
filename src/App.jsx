
import { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Home from "./component/home";
import "./App.css";
import Sightings from "./component/sightings";
 
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                  <div className="navigation_menu">
                    <ul>
                        <li className="header">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="header">
                            <Link to="/sightings">
                                Sightings
                            </Link>
                        </li>
                    </ul>
                  </div> 
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Home />}
                        ></Route>
                        <Route
                            exact
                            path="/sightings"
                            element={<Sightings />}
                        ></Route>
                    </Routes>

                </div>
            </Router>
        );
    }
}
 
export default App;