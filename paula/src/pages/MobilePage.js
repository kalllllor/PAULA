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
                            href="#map"
                        >MAPY
                        </a>
                        <a className={"link" + (this.props.active === "mainPage" ? " animation__up" : "") + (this.props.before === "mainPage" ? " animation__down" : "")}
                            href="#contact"
                        >KONTAKT
                        </a>
                    </div>
                </div>
                <div className="Menu__padding" id="main" />
                <div className="mobilePage__Main" >
                    <div className="Mobile__title">
                        <h1>KIM JESTEŚMY</h1>
                    </div>
                    <div className="main__content">
                        <p>Nasza hurtownia PAULA powstała ponad 20 lat temu, a dokładniej w 1998 w Słomnikach. Z roku na rok nasza oferta uległa rozbudowie, tak aby w maksymalnym stopniu dostosować ją do potrzeb naszych klientów. Z czasem zdobywaliśmy zaufanie coraz większej liczby klientów (ponad 20 tysięcy), a dziś dostarczamy materiały do odbiorców w całej Małopolsce i nie tylko.W 2010 roku powstał nasz drugi oddział w Miechowie.</p>
                    </div>
                </div>
                <div className="mobilePage__About" id="about">
                    <div className="Mobile__title About__title">
                        <h1>CO NAS CECHUJE</h1>
                    </div>
                    <div className="mainPage__About">

                        {aboutData.map(item => {
                            return (<AboutColumn data={item} />)
                        })}
                    </div>
                </div>
                <div className="mobilePage__Map" id="map">
                    <div className="Mobile__title map__title">
                        <h1>GDZIE NAS ZNALEŹĆ</h1>
                    </div>
                    <div className="map__contener">
                        <h2>ODDZIAŁ SŁOMNIKI</h2>
                        <iframe className="Mobile__map" title="oddzialSlomniki" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.7896139065024!2d20.08388305161039!3d50.23983521029808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165294cab2fbf9%3A0x2adcec16e6812c57!2sF.H.U.%20%22PAULA%22%20Pawe%C5%82%20Zieli%C5%84ski-Wojciech%20Podyma%20s%20c!5e0!3m2!1spl!2spl!4v1591528360106!5m2!1spl!2spl" />
                    </div>
                    <div className="map__contener">
                        <h2>ODDZIAŁ MIECHÓW</h2>
                        <iframe className="Mobile__map" title="oddzialMiechow" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.5367980332494!2d20.008533451613044!3d50.35654430190654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717abd2d833cde9%3A0x5a78f744149fd93c!2sF.H.U.%20%22Paula%22%20Pawe%C5%82%20Zieli%C5%84ski%20-%20Wojciech%20Podyma!5e0!3m2!1spl!2spl!4v1591528492798!5m2!1spl!2spl" />
                    </div>
                </div>
                <div className="mobilePage__Contact" id="main" id="contact">
                    <div className="Mobile__title Contact__title">
                        <h1>KONTAKT</h1>
                        <div className="contact__content">
                            <div className="content__pause" />
                            <h2>ODDZIAŁ SŁOMNIKI</h2>
                            <h3>ul. Proszowska 23</h3>
                            <p>pn-pt 7-18</p>
                            <p>sobota 7-14</p>
                            <a href="tel:123883062"><p>tel. 12 388 30 62</p></a>
                            <a href="tel:123880340"><p>tel. 12 388 03 40</p></a>
                            <div className="content__pause" />
                            <h2>ODDZIAŁ MIECHÓW</h2>
                            <p>ul. Sienkiewicza 53</p>
                            <p>pn-pt 7-17</p>
                            <p>sobota 7-14</p>
                            <a href="tel:413840400"><p>tel. 41 38 40 400</p></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobilePage