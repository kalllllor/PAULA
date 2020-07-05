import React, { Component } from 'react'
import "../styles/components/menu.css"
import logo from "../img/logo.png"
import MainPage from '../pages/MainPage'
import { Link } from "react-router-dom"

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            isVisible: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    render() {
        const { isVisible } = this.state;
        console.log(isVisible)
        return (
            <div>
                <div className="Menu">
                    <div className="Menu__mobile">
                        <div className="Menu__logo">
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                        </div>
                        <div className="Menu__toggler">
                            <div className={isVisible ? "Menu__button button__active" : "Menu__button"} onClick={this.toggleMenu}>
                                <div className="Button__burger" />
                            </div>
                        </div>
                    </div>
                    <div className={`Menu__links ${isVisible ? 'Menu__links--visible' : ''}`}>
                        <Link className={"link" + (this.props.active === "mainPage" ? " animation__up" : "") + (this.props.before === "mainPage" ? " animation__down" : "")}
                            to={{
                                pathname: "/",
                                before: this.props.active
                            }}>Strona Główna
                        </Link>
                        <Link className={"link" + (this.props.active === "aboutPage" ? " animation__up" : "") + (this.props.before === "aboutPage" ? " animation__down" : "")}
                            to={{
                                pathname: "/about",
                                before: this.props.active
                            }}>O nas
                        </Link>
                        <Link className={"link" + (this.props.active === "producersPage" ? " animation__up" : "") + (this.props.before === "producersPage" ? " animation__down" : "")}
                            to={{
                                pathname: "/producers",
                                before: this.props.active
                            }}>Producenci
                        </Link>
                        <Link className={"link__chemist" + (this.props.active === "chemistPage" ? " animation__up__chemist" : "") + (this.props.before === "chemistPage" ? " animation__down__chemist" : "")}
                            to={{
                                pathname: "/chemist",
                                before: this.props.active
                            }}>Drogeria
                        </Link>
                        <Link className={"link" + (this.props.active === "contactPage" ? " animation__up" : "") + (this.props.before === "contactPage" ? " animation__down" : "")}
                            to={{
                                pathname: "/contact",
                                before: this.props.active
                            }}>Kontakt
                        </Link>
                        <Link className={"link" + (this.props.active === "RODOPage" ? " animation__up" : "") + (this.props.before === "RODOPage" ? " animation__down" : "")}
                            to={{
                                pathname: "/RODO",
                                before: this.props.active
                            }}>RODO
                        </Link>
                    </div>
                </div>
                <div className="Menu__padding" />
            </div>
        )
    }
}

export default Menu