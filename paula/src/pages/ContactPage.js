import React, { Component } from "react"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import "../styles/pages/contactPage.css"
import mapsSign from "../img/location.png"
import phoneSign from "../img/phone.png"
import adressSign from "../img/adress.png"
class ContactPage extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {

        return (
            <div className="contactPage">

                <Menu active="contactPage" before={this.props.location.before} />
                <div style={{ borderTop: "solid 3vh #FCC700" }}>
                    <div className="contactPage__title" >
                        <h1>KONTAKT</h1>
                    </div>
                    <div className="contactPage__content">
                        <div className="contactPage__Section">
                            <div className="container__title">
                                <h2>ODDZIAŁ SŁOMNIKI</h2>
                            </div>
                            <div className="container__content">
                                <div className="content__left">
                                    <h2>GODZINY OTWARCIA</h2>
                                    <p><h4>Poniedziałek:</h4> 8:00 - 18:00</p>
                                    <p><h4>Wtorek:</h4> 8:00 - 18:00</p>
                                    <p><h4>Środa:</h4> 8:00 - 18:00</p>
                                    <p><h4>Czwartek:</h4> 8:00 - 18:00</p>
                                    <p><h4>Piątek:</h4> 8:00 - 18:00</p>
                                    <p><h4>Sobota:</h4> 8:00 - 18:00</p>
                                </div>
                                <div className="content__right">
                                    <img src={adressSign} alt="" />
                                    <h3>ul. Proszowska 23</h3>
                                    <img src={phoneSign} alt="" />
                                    <h3>tel. 12 388 30 62</h3>
                                    <h3>tel. 12 388 03 40</h3>
                                </div>
                            </div>
                            <div className="contact__map">
                                <div className="contact__mapSign">
                                    <img src={mapsSign} alt="" />
                                </div>
                                <iframe className="contact__googleMap" title="oddzialMiechow" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.1995532974543!2d20.084276602770252!3d50.24011881618411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165294cab2fbf9%3A0x92062f2cf9df58b1!2sProszowska%2023%2C%2032-090%20S%C5%82omniki!5e0!3m2!1spl!2spl!4v1590180122445!5m2!1spl!2spl" />
                            </div>
                        </div>
                        <div className="contactPage__Section">
                            <div className="container__title">
                                <h2>ODDZIAŁ MIECHÓW</h2>
                            </div>
                            <div className="container__content">
                                <div className="content__left">
                                    <h2>GODZINY OTWARCIA</h2>
                                    <p><h4>Poniedziałek:</h4> 8:00 - 18:00</p>
                                    <p><h4>Wtorek:</h4> 8:00 - 18:00</p>
                                    <p><h4>Środa:</h4> 8:00 - 18:00</p>
                                    <p><h4>Czwartek:</h4> 8:00 - 18:00</p>
                                    <p><h4>Piątek:</h4> 8:00 - 18:00</p>
                                    <p><h4>Sobota:</h4> 8:00 - 18:00</p>
                                </div>
                                <div className="content__right">
                                    <img src={adressSign} alt="" />
                                    <h3>ul. Sienkiewicza 53</h3>
                                    <img src={phoneSign} alt="" />
                                    <h3>tel. 41 38 40 400</h3>
                                </div>
                            </div>
                            <div className="contact__map">
                                <div className="contact__mapSign">
                                    <img src={mapsSign} alt="" />
                                </div>
                                <iframe className="contact__googleMap" title="oddzialSlomniki" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.268326255891!2d20.008755822243096!3d50.35688891743078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717abd2d68f6cb7%3A0x532dfc1aa9c8ecf!2sHenryka%20Sienkiewicza%2053%2C%2032-200%20Miech%C3%B3w!5e0!3m2!1spl!2spl!4v1590180766079!5m2!1spl!2spl" />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ContactPage