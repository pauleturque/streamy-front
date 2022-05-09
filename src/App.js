import "./App.scss";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Row from "./components/Row";
import Video from "./components/Video";
import Subscription from "./components/Subscription";
import Requests from "./config/Requests";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import { hasAuthenticated } from "./services/AuthApi";
import Auth from "./contexts/Auth";
import AuthenticatedRoute from "./components/AuthenticatedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  console.log("app : " + isAuthenticated);
  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/">
              <Nav />
              <Banner />

              <div>
                <Footer />
              </div>
            </Route>
            <Route path="/auth" component={Subscription}></Route>

            <Route path="/films" component={Row}>
              <Row
                title="Tous les films"
                fetchUrl={Requests.fetchNetflixOriginals}
                isPoster={true}
              />
            </Route>
            <Route path="/video/:id" component={Video}></Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
            <AuthenticatedRoute path="/films" component={Row} />
          </Switch>
        </Router>
      </div>
    </Auth.Provider>
  );
}

export default App;
