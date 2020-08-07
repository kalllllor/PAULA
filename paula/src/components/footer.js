import React, { Component } from 'react'
import "../styles/components/footer.css"
import logo from "../img/logo.png"
import MainPage from '../pages/MainPage'
import MapContainer from "./MapContainer"

class Footer extends React.Component {
    render() {
        return (
            <div className={this.props.active === "chemistPage" ? "Footer__chemist" : "Footer"}>
                <div className="Footer__content">
                    <div className="Footer__contener">
                        <h2>KONTAKT</h2>
                        <h3>ODDZIAŁ SŁOMNIKI</h3>
                        <p>ul. Proszowska 23</p>
                        <p>tel. 12 388 30 62</p>
                        <p>tel. 12 388 03 40</p>
                        <h3>ODDZIAŁ MIECHÓW</h3>
                        <p>ul. Sienkiewicza 53</p>
                        <p>tel. 41 38 40 400</p>
                    </div>
                    <div className="Footer__contener">
                        <h2>GODZINY OTWARCIA</h2>
                        <h3>ODDZIAŁ SŁOMNIKI</h3>
                        <p>pn-pt 7-18</p>
                        <p>sobota 7-14</p>
                        <p>niedziela nieczynne</p>
                        <h3>ODDZIAŁ MIECHÓW</h3>
                        <p>pn-pt 7-17</p>
                        <p>sobota 7-14</p>
                        <p>niedziela nieczynne</p>
                    </div>
                    <div className="Footer__contener">
                        <iframe className="Footer__map" title="oddzialSlomniki" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.7896139065024!2d20.08388305161039!3d50.23983521029808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165294cab2fbf9%3A0x2adcec16e6812c57!2sF.H.U.%20%22PAULA%22%20Pawe%C5%82%20Zieli%C5%84ski-Wojciech%20Podyma%20s%20c!5e0!3m2!1spl!2spl!4v1591528360106!5m2!1spl!2spl" />
                        <h3 style={{ marginLeft: "5%" }}>ODDZIAŁ SŁOMNIKI</h3>
                    </div>
                    <div className="Footer__contener">
                        <iframe className="Footer__map" title="oddzialMiechow" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.5367980332494!2d20.008533451613044!3d50.35654430190654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717abd2d833cde9%3A0x5a78f744149fd93c!2sF.H.U.%20%22Paula%22%20Pawe%C5%82%20Zieli%C5%84ski%20-%20Wojciech%20Podyma!5e0!3m2!1spl!2spl!4v1591528492798!5m2!1spl!2spl" />
                        <h3 style={{ marginLeft: "5%" }}>ODDZIAŁ MIECHÓW</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer