import React, { Component } from "react"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import "../styles/pages/notFoundPage.css"

class NotFoundPage extends React.Component {
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
                <h2>PAGE NOT FOUND </h2>
            </div>
        )
    }
}

export default NotFoundPage