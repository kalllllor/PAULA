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
                        <Link className={"link" + (this.props.active == "mainPage" ? " link__active" : "") + (this.props.before == "mainPage" ? " link__hide" : "")} 
                            to={{
                                pathname:"/",
                                before: this.props.active
                            }}>Strona Główna
                        </Link>
                        <Link className={"link" + (this.props.active == "aboutPage" ? " link__active" : "") + (this.props.before == "aboutPage" ? " link__hide" : "")} 
                            to={{
                                pathname:"/about",
                                before: this.props.active
                            }}>O nas
                        </Link>
                        <Link className={"link" + (this.props.active == "producersPage" ? " link__active" : "") + (this.props.before == "producersPage" ? " link__hide" : "")} 
                            to={{
                                pathname:"/producers",
                                before: this.props.active
                            }}>Producenci
                        </Link>
                        <Link className={"link" + (this.props.active == "contactPage" ? " link__active" : "") + (this.props.before == "contactPage" ? " link__hide" : "")} 
                            to={{
                                pathname:"/contact",
                                before: this.props.active
                            }}>Kontakt
                        </Link>
                    </div>
                </div>
                <div className="Menu__padding" />
            </div>
        )
    }
}

export default Menu