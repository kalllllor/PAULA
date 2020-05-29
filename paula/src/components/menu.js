import React, { Component } from 'react'
import "../styles/components/menu.css"
import logo from "../img/logo.png"
import MainPage from '../pages/MainPage'
import { Link } from "react-router-dom"

class Menu extends React.Component {

    render() {
        return (
            <div>
                <div className="Menu">
                    <div className="Menu__logo">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                    </div>
                    <div className="Menu__links">
                        <Link className={"link " + (this.props.active == "mainPage" ? "link__active" : "")} to="/">Strona Główna</Link>
                        <Link className={"link " + (this.props.active == "aboutPage" ? "link__active" : "")} to="/about">O nas</Link>
                        <Link className={"link " + (this.props.active == "producersPage" ? "link__active" : "")}to="/producers">Producenci</Link>
                        <Link className={"link " + (this.props.active == "contactPage" ? "link__active" : "")} to="/contact">Kontakt</Link>
                    </div>
                </div>
                <div className="Menu__padding" />
            </div>
        )
    }
}

export default Menu