import "./App.scss";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Row from "./components/Row";
import Video from "./components/Video";
import Requests from "./config/Requests";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Nav />
            <Banner />
            <Row
              title="Programmes originaux Netflix"
              fetchUrl={Requests.fetchNetflixOriginals}
              isPoster={true}
            />
            <Row
              title="Tendances actuelles"
              fetchUrl={Requests.fetchTrending}
            />
            <Row title="Les mieux notés" fetchUrl={Requests.fetchTopRated} />
            <Row title="Films d'action" fetchUrl={Requests.fetchActionMovies} />
            <Row />

            <div>
              <Footer />
            </div>
          </Route>
          <Route path="/video/:id" component={Video} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
