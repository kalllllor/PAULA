import React, { Component } from "react"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import "../styles/pages/chemistPage.css"


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
                <div className="chemistPage">
                    <Menu active="chemistPage" before={this.props.location.before} />

                    <Footer />
                </div>
            </div>
        )
    }
}

export default AboutPage