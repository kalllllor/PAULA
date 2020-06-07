import React, { Component } from "react"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom"

//Paula's Pages
import MainPage from "../src/pages/MainPage"
import AboutPage from "../src/pages/AboutPage"
import ProducersPage from "../src/pages/ProducersPage"
import ChemistPage from "../src/pages/ChemistPage"
import ContactPage from "../src/pages/ContactPage"
import RODOPage from "../src/pages/RODOPage"
import NotFoundPage from "../src/pages/NotFoundPage"
import Footer from "./components/Footer"

class App extends Component {
    render() {
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
                <Footer/>
            </div> 
        )
    }
}

export default App