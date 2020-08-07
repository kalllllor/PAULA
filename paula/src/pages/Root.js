import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//Paula's Pages
import MainPage from "./MainPage";
import MobilePage from "./MobilePage";
import AboutPage from "./AboutPage";
import ProducersPage from "./ProducersPage";
import ChemistPage from "./ChemistPage";
import ContactPage from "./ContactPage";
import RODOPage from "./RODOPage";
import NotFoundPage from "./NotFoundPage";
import Footer from "../components/Footer";

class Root extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const { width } = this.state;
    const isMobile = width <= 1000;
    if (isMobile) {
      return <MobilePage />;
    } else {
      return (
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/PAULA" component={MainPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/producers" component={ProducersPage} />
              <Route exact path="/chemist" component={ChemistPage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/RODO" component={RODOPage} />
              <Route exact path="/404" component={NotFoundPage} />
              <Redirect to="/404" />
            </Switch>
          </Router>
          <Footer />
        </div>
      );
    }
  }
}

export default Root;
