import React, { Component } from "react"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import "../styles/pages/contactPage.css"

class ContactPage extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {

        return (
            <div className="mainPage">
                <Menu active = "contactPage" />
                <Footer />
            </div>
        )
    }
}

export default ContactPage