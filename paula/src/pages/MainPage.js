import React, { Component } from "react"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import Slider from "../components/Slider"
import AboutColumn from "../components/AboutColumn"
import ShopColumn from "../components/ShopColumn"
import { aboutData } from "../data/aboutData"
import { shopsData } from "../data/shopsData"
import "../styles/pages/mainPage.css"

class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {

        return (
            <div className="mainPage">
                <Menu />
                <Slider />

                <div className="mainPage__aboutTitle">
                    <h2>CO NAS CECHUJE</h2>
                </div>
                <div className="mainPage__About">

                    {aboutData.map(item => {
                        return (<AboutColumn data={item} />)
                    })}
                </div>
                <Footer />
            </div>
        )
    }
}

export default MainPage