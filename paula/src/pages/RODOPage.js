import React, { Component } from "react"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import "../styles/pages/RODOPage.css"


class AboutPage extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div className="RODOPage">
                    <Menu active="RODOPage" before={this.props.location.before} />

                    <Footer />
                </div>
            </div>
        )
    }
}

export default AboutPage