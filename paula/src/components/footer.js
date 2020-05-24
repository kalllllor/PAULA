import React, { Component } from 'react'
import "../styles/components/footer.css"
import logo from "../img/logo.png"
import MainPage from '../pages/MainPage'
import MapContainer from "../components/MapContainer"

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
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
                        <p><h4>Poniedziałek:</h4> 8:00 - 18:00</p>
                        <p><h4>Wtorek:</h4> 8:00 - 18:00</p>
                        <p><h4>Środa:</h4> 8:00 - 18:00</p>
                        <p><h4>Czwartek:</h4> 8:00 - 18:00</p>
                        <p><h4>Piątek:</h4> 8:00 - 18:00</p>
                        <p><h4>Sobota:</h4> 8:00 - 18:00</p>
                        <p><h4>Niedziela:</h4> 8:00 - 18:00</p>
                    </div>
                    <div className="Footer__contener">
                        <iframe className="Footer__map" title="oddzialMiechow" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.1995532974543!2d20.084276602770252!3d50.24011881618411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165294cab2fbf9%3A0x92062f2cf9df58b1!2sProszowska%2023%2C%2032-090%20S%C5%82omniki!5e0!3m2!1spl!2spl!4v1590180122445!5m2!1spl!2spl" />
                        <h3 style={{ marginLeft: "5%" }}>ODDZIAŁ MIECHÓW</h3>
                    </div>
                    <div className="Footer__contener">
                        <iframe className="Footer__map" title="oddzialSlomniki" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.268326255891!2d20.008755822243096!3d50.35688891743078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717abd2d68f6cb7%3A0x532dfc1aa9c8ecf!2sHenryka%20Sienkiewicza%2053%2C%2032-200%20Miech%C3%B3w!5e0!3m2!1spl!2spl!4v1590180766079!5m2!1spl!2spl" />
                        <h3 style={{ marginLeft: "5%" }}>ODDZIAŁ SŁOMNIKI</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer