import React, { Component } from "react"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import "../styles/pages/aboutPage.css"

class AboutPage extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {

        return (
            <div className="mainPage">
                <Menu />
                <Footer />
            </div>
        )
    }
}

export default AboutPage