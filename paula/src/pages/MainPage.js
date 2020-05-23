import React, { Component } from "react"
import Footer from "../components/Footer"
import Menu from "../components/menu"
import Slider from "../components/slider"
import "../styles/pages/mainPage.css"

class MainPage extends React.Component {

    render() {
        return (
            <div>
                <Menu />
                <Slider />
                <div className="temporaryClass" />
                <Footer />
            </div>
        )
    }
}

export default MainPage