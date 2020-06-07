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

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div className="aboutPage">
                    <Menu active="aboutPage" before={this.props.location.before} />
                    <div style={{ borderTop: "solid 3vh #FCC700" }}>
                        <div className="aboutPage__title" >
                            <h1>O NAS</h1>
                        </div>
                        <div className="aboutPage__Section">
                            <div className="aboutPage__Section__container aboutPage__container__underline">
                                <div className="aboutPage__container__text">
                                    <div className="aboutPage__container__textTitle">
                                        <h2>DOŚWIADCZENIE</h2>
                                    </div>
                                    <p>Hurtownie PAULA to przede wszystkim doradcy budowlani z wieloletnim, praktycznym doświadczeniem w branży
                                    zapewniający doradctwo i fachowe wyliczenie ilości materiałów budowlanych niezbędnych do budowy domu, od fundamentu aż po dach.</p>
                                </div>
                            </div>
                            <div className="aboutPage__Section__container">
                                <div className="aboutPage__container__image">
                                    <img src={image} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="aboutPage__Section">
                            <div className="aboutPage__Section__container">
                                <div className="aboutPage__container__image">
                                    <img src={image2} alt="" />
                                </div>
                            </div>
                            <div className="aboutPage__Section__container  aboutPage__container__underline">
                                <div className="aboutPage__container__text">
                                    <div className="aboutPage__container__textTitle">
                                        <h2>RZETELNOŚĆ</h2>
                                    </div>
                                    <p>W działalności naszej firmy przykładamy szczególną uwagę do fachowości, rzetelności, terminowości oraz solidności.
                                    Budując wizerunek firmy w oparciu o te cechy zyskujemy coraz większe zaufanie naszych klientów - zarówno dostawców jak i odbiorców.
                                    Dowodem tego są różne wyróżnienia od producentów.</p>
                                </div>
                            </div>

                        </div>
                        <div className="aboutPage__Section">
                            <div className="aboutPage__Section__container aboutPage__container__underline">
                                <div className="aboutPage__container__text">
                                    <div className="aboutPage__container__textTitle">
                                        <h2>NISKIE CENY</h2>
                                    </div>
                                    <p>Wieloletnia współpraca z najważniejszymi producentami na rynku, pozzwala nam nie tylko oferować materiały po korzystnych cenach,
                                    ale także wdrażać wspólnie nowe, innowacyjne technologie.</p>
                                </div>
                            </div>
                            <div className="aboutPage__Section__container">
                                <div className="aboutPage__container__image">
                                    <img src={image} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage