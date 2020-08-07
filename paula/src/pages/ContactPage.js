import React, { Component } from "react"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import "../styles/pages/contactPage.css"
import mapsSign from "../img/location.png"
import phoneSign from "../img/phone.png"
import adressSign from "../img/adress.png"
import mailSign from "../img/mail.png"
class ContactPage extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        return (
            <div className="contactPage">
                <Menu active="contactPage" before={this.props.location.before} />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d8d8d8" fill-opacity="1" d="M0,320L24,277.3C48,235,96,149,144,128C192,107,240,149,288,144C336,139,384,85,432,80C480,75,528,117,576,122.7C624,128,672,96,720,122.7C768,149,816,235,864,229.3C912,224,960,128,1008,112C1056,96,1104,160,1152,176C1200,192,1248,160,1296,170.7C1344,181,1392,235,1416,261.3L1440,288L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
                <div style={{ borderTop: "solid 1.5rem #FCC700" }}>
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
                                    <p><h4>Poniedziałek - Piątek:</h4> 7:00 - 18:00</p>
                                    <p><h4>Sobota:</h4> 7:00 - 14:00</p>
                                    <p><h4>Niedziela:</h4> nieczynne</p>
                                </div>
                                <div className="content__right">
                                    <div className="content__contact">
                                        <img src={adressSign} alt="" />
                                        <h3>ul. Proszowska 23 </h3>
                                        <h3>32-200 Słomniki</h3>
                                    </div>
                                    <div className="content__contact">
                                        <img src={phoneSign} alt="" />
                                        <h3>12 388 30 62</h3>
                                        <h3>660 693 467</h3>
                                    </div>
                                    <div className="content__contact">
                                        <img src={mailSign} alt="" />
                                        <h3>paulaslomniki@o2.pl</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="contact__map">
                                <div className="contact__mapSign">
                                    <img src={mapsSign} alt="" />
                                </div>
                                <iframe className="contact__googleMap" title="oddzialSlomniki" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.7896139065024!2d20.08388305161039!3d50.23983521029808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165294cab2fbf9%3A0x2adcec16e6812c57!2sF.H.U.%20%22PAULA%22%20Pawe%C5%82%20Zieli%C5%84ski-Wojciech%20Podyma%20s%20c!5e0!3m2!1spl!2spl!4v1591528360106!5m2!1spl!2spl" />
                            </div>
                        </div>
                        <div className="contactPage__Section">
                            <div className="container__title">
                                <h2>ODDZIAŁ MIECHÓW</h2>
                            </div>
                            <div className="container__content">
                                <div className="content__left">
                                    <h2>GODZINY OTWARCIA</h2>
                                    <p><h4>Poniedziałek - Piątek:</h4> 7:00 - 17:00</p>
                                    <p><h4>Sobota:</h4> 7:00 - 14:00</p>
                                    <p><h4>Niedziela:</h4> nieczynne</p>
                                </div>
                                <div className="content__right">
                                    <div className="content__contact">
                                        <img src={adressSign} alt="" />
                                        <h3>ul. Sienkiewicza 53</h3>
                                        <h3>32-200 Miechów</h3>
                                    </div>
                                    <div className="content__contact">
                                        <img src={phoneSign} alt="" />
                                        <h3>795 581 025</h3>
                                        <h3>41 38 40 400</h3>
                                        <h3>41 35 14 221</h3>
                                    </div>
                                    <div className="content__contact">
                                        <img src={mailSign} alt="" />
                                        <h3>paulamiechow@o2.pl</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="contact__map">
                                <div className="contact__mapSign">
                                    <img src={mapsSign} alt="" />
                                </div>
                                <iframe className="contact__googleMap" title="oddzialMiechow" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.5367980332494!2d20.008533451613044!3d50.35654430190654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717abd2d833cde9%3A0x5a78f744149fd93c!2sF.H.U.%20%22Paula%22%20Pawe%C5%82%20Zieli%C5%84ski%20-%20Wojciech%20Podyma!5e0!3m2!1spl!2spl!4v1591528492798!5m2!1spl!2spl" />
                            </div>
                        </div>
                        <div className="contactPage__Section">
                            <div className="container__title">
                                <h2>PAULA II WOD-KAN CO GAZ</h2>
                            </div>
                            <div className="container__content">
                                <div className="content__left">
                                    <h2>GODZINY OTWARCIA</h2>
                                    <p><h4>Poniedziałek - Piątek:</h4> 7:00 - 18:00</p>
                                    <p><h4>Sobota:</h4> 7:00 - 14:00</p>
                                    <p><h4>Niedziela:</h4> nieczynne</p>
                                </div>
                                <div className="content__right">
                                    <div className="content__contact">
                                        <img src={adressSign} alt="" />
                                        <h3>ul. Proszowska 23</h3>
                                        <h3>32-090 Słomniki</h3>
                                    </div>
                                    <div className="content__contact">
                                        <img src={phoneSign} alt="" />
                                        <h3>606 645 987</h3>
                                        <h3>12 388 03 40</h3>
                                    </div>
                                    <div className="content__contact">
                                        <img src={mailSign} alt="" />
                                        <h3>paulasklep2@gmail.pl</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="contact__map">
                                <div className="contact__mapSign">
                                    <img src={mapsSign} alt="" />
                                </div>
                                <iframe className="contact__googleMap" title="oddzialMiechow" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.7896139065024!2d20.08388305161039!3d50.23983521029808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165294cab2fbf9%3A0x2adcec16e6812c57!2sF.H.U.%20%22PAULA%22%20Pawe%C5%82%20Zieli%C5%84ski-Wojciech%20Podyma%20s%20c!5e0!3m2!1spl!2spl!4v1591528360106!5m2!1spl!2spl" />
                            </div>
                        </div>
                        <div className="contactPage__Section">
                            <div className="container__title">
                                <h2>PAULA DROGERIE POLSKIE</h2>
                            </div>
                            <div className="container__content">
                                <div className="content__left">
                                    <h2>GODZINY OTWARCIA</h2>
                                    <p><h4>Poniedziałek - Piątek:</h4> 8:30 - 19:00</p>
                                    <p><h4>Sobota:</h4> 8:00 - 19:00</p>
                                    <p><h4>Niedziela:</h4> nieczynne</p>
                                </div>
                                <div className="content__right">
                                    <div className="content__contact">
                                        <img src={adressSign} alt="" />
                                        <h3>ul. Proszowska 7</h3>
                                        <h3>32-090 Słomniki</h3>
                                    </div>
                                    <div className="content__contact">
                                        <img src={phoneSign} alt="" />
                                        <h3>606 461 683</h3>
                                        <h3>12 388 16 64</h3>
                                    </div>
                                    <div className="content__contact">
                                        <img src={mailSign} alt="" />
                                        <h3>sklep.paula@o2.pl</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="contact__map">
                                <div className="contact__mapSign">
                                    <img src={mapsSign} alt="" />
                                </div>
                                <iframe className="contact__googleMap" title="oddzialSlomniki" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.7871193724714!2d20.081506451610394!3d50.239881810294676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471652eb6eb9acf7%3A0x462ee9667a6524f8!2sDrogerie%20Polskie%20S%C5%82omniki!5e0!3m2!1spl!2spl!4v1591528617294!5m2!1spl!2spl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactPage