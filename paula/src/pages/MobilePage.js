import React, { Component } from 'react'
import "../styles/pages/mobilePage.css"
import "../styles/components/menu.css"
import "../styles/pages/mainPage.css"
import logo from "../img/logo.png"
import { aboutData } from "../data/aboutData"

import AboutColumn from "../components/AboutColumn"

class MobilePage extends React.Component {
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
            <div className="MobilePage">
                <div className="Menu">
                    <div className="Menu__mobile">
                        <div className="Menu__logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="Menu__toggler">
                            <div className={isVisible ? "Menu__button button__active" : "Menu__button"} onClick={this.toggleMenu}>
                                <div className="Button__burger" />
                            </div>
                        </div>
                    </div>
                    <div className={`Menu__links ${isVisible ? 'Menu__links--visible' : ''}`}>
                        <a className={"link" + (this.props.active === "mainPage" ? " animation__up" : "") + (this.props.before === "mainPage" ? " animation__down" : "")}
                            href="#main"
                        >STRONA GŁÓWNA
                        </a>
                        <a className={"link" + (this.props.active === "mainPage" ? " animation__up" : "") + (this.props.before === "mainPage" ? " animation__down" : "")}
                            href="#about"
                        >O NAS
                        </a>
                        <a className={"link" + (this.props.active === "mainPage" ? " animation__up" : "") + (this.props.before === "mainPage" ? " animation__down" : "")}
                            href="#contact"
                        >KONTAKT
                        </a>
                    </div>
                </div>
                <div className="Menu__padding" />
                <div className="mobilePage__Main" id="main">
                    <div className="Mobile__title">
                        <h1>KIM JESTEŚMY</h1>
                    </div>
                    <div className="main__content">
                        <p>Nasza hurtownia PAULA powstała ponad 20 lat temu, a dokładniej w 1998 w Słomnikach. Z roku na rok nasza oferta uległa rozbudowie, tak aby w maksymalnym stopniu dostosować ją do potrzeb naszych klientów. Z czasem zdobywaliśmy zaufanie coraz większej liczby klientów (ponad 20 tysięcy), a dziś dostarczamy materiały do odbiorców w całej Małopolsce i nie tylko.W 2010 roku powstał nasz drugi oddział w Miechowie.</p>
                    </div>
                </div>
                <div className="mobilePage__About" id="about">
                    <div className="Mobile__title">
                        <h1>CO NAS CECHUJE</h1>
                    </div>
                    <div className="mainPage__About">

                        {aboutData.map(item => {
                            return (<AboutColumn data={item} />)
                        })}
                    </div>
                </div>
                <div className="mobilePage__Contact" id="main" id="contact">
                    <div className="Mobile__title Contact__title">
                        <h1>KONTAKT</h1>
                        <div className="contact__content">
                            <h2>ODDZIAŁ SŁOMNIKI</h2>
                            <h3>ul. Proszowska 23</h3>
                            <p>pn-pt 7-18</p>
                            <p>sobota 7-14</p>
                            <p>tel. 12 388 30 62</p>
                            <p>tel. 12 388 03 40</p>
                            <div className="content__pause" />
                            <h2>ODDZIAŁ MIECHÓW</h2>
                            <p>ul. Sienkiewicza 53</p>
                            <p>pn-pt 7-17</p>
                            <p>sobota 7-14</p>
                            <p>tel. 41 38 40 400</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobilePage