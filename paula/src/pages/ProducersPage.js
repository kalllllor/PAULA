import React, { Component } from "react"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import "../styles/pages/producersPage.css"

class ProducersPage extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {

        return (
            <div className="mainPage">
                <Menu active = "producersPage" />
                <Footer />
            </div>
        )
    }
}

export default ProducersPage