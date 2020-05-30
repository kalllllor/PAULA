import React, { Component } from "react"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import "../styles/pages/aboutPage.css"

import image from "../img/slider_example1.jpg"
import image2 from "../img/slider_example2.png"

class AboutPage extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {

        return (
            <div>
                <div className="aboutPage">

                    <Menu active="aboutPage" />
                    <div style={{ borderTop: "solid 3vh #FCC700" }}>
                        <div className="aboutPage__title" >
                            <h1>O NAS</h1>
                        </div>
                        <div className="aboutPage__Section">
                            <div className="Section__container container__underline">
                                <div className="container__text">
                                    <div className="container__textTitle">
                                        <h2>DOŚWIADCZENIE</h2>
                                    </div>
                                    <p>Od 1998 roku stanowimy istotny element dynamicznie rozwijającego się lokalnego rynku branży materiałów budowlanych. Od początku swojego istnienia stawiamy przede wszystkim na partnerstwo z firmami z sektora budowlanego, dzięki czemu jesteśmy dziś znanym i preferowanym dostawcą technologii i innowacyjnych rozwiązań w tej branży. Jako Firma Handlowa Paula zapewniamy obsługę firmom wykonawczym i prowadzimy także sprzedaż detaliczną.</p>
                                </div>
                            </div>
                            <div className="Section__container">
                                <div className="container__image">
                                    <img src={image} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="aboutPage__Section">
                            <div className="Section__container">
                                <div className="container__image">
                                    <img src={image2} alt="" />
                                </div>
                            </div>
                            <div className="Section__container  container__underline">
                                <div className="container__text">
                                    <div className="container__textTitle">
                                        <h2>KONKURENCYJNE CENY</h2>
                                    </div>
                                    <p>Mnogość artykułów, zróżnicowanie cenowe oraz fachowa i kompleksowa obsługa - to wizytówka naszej firmy, należącej do wiodących w branży. Znajdą Państwo tutaj różnorodne produkty najbardziej znanych producentów c Nasi konsultanci handlowi bardzo chętnie doradzą Państwu jakie materiały będą potrzebne, pomogą w ich doborze oraz objaśnią jak najlepsze zastosowanie. Zakupiony towar dostarczą na wskazane przez Państawa miejsce nasze samochody, dostawcze lub ciężarowe. Oferujemy możliwość zakupu towaru w systemie ratalnym, na bardzo korzystnych warunkach. Zamówienia towaru przyjmujemy także telefonicznie. Nasze składy budowlane mieszczą się w Słomnikach na ul. Proszowska 23 oraz w Miechowie na ul.Sienkiewicza 53.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default AboutPage