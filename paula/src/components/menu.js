import React, { Component } from 'react'
import "../styles/components/menu.css"
import logo from "../img/logo.png"
import MainPage from '../pages/MainPage'
class Menu extends React.Component {
    render() {
        return (
            <div>
            <div className="Menu">
                <div className="Menu__logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="Menu__links">
                    <a className="link" href={MainPage}>O nas</a>
                    <a className="link" href={MainPage}>Producenci</a>
                    <a className="link" href={MainPage}>Kontakt</a>
                </div>
            </div>
            <div className="Menu__padding" />
            </div>
        )
    }
}

export default Menu