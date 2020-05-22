import React, { Component } from "react"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import "../styles/pages/mainPage.css"

class MainPage extends React.Component {

    render() {
        return (
            <div>
                <Menu />
                <div className="temporaryClass" />
                <Footer />
            </div>
        )
    }
}

export default MainPage