import React, { Component } from "react"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import "../styles/pages/chemistPage.css"
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
                <div className="chemistPage">
                    <Menu active="chemistPage" before={this.props.location.before} />

                    <div style={{ borderTop: "solid 3vh #3abeb7" }}>
                        <div className="chemistPage__title" >
                            <h1>DROGERIA</h1>
                        </div>
                        <div className="chemistPage__Section">
                            <div className="chemistPage__Section__container chemistPage__container__underline">
                                <div className="chemistPage__container__text">
                                    <div className="chemistPage__container__textTitle">
                                        <h2>DROGERIE POLSKIE</h2>
                                    </div>
                                    <p>W skład firmy PAULA wchodzi również sklep kosmetyczny <a href="https://drogeriepolskie.pl" target="_blank">DROGERIE POLSKIE</a> powstały w 1998 roku. DP to najszybciej rozwijająca się sieć drogeryjna w Polsce. W naszym sklepie posiadamy bogaty asortyment kosmetyków, perfum, chemii i biżuterii w najlepszych cenach. Oferujemy profesjonalną obsługę klientów i doradztwo, które sprawiają, że zakupy w naszej drogerii są trafione, opłacalne i wartościowe. Nasza Drogeria gwarantuje dostęp do wyjątkowych personalizowanych ofert, usług i profitów w postaci super cen.</p>
                                </div>
                            </div>
                            <div className="chemistPage__Section__container">
                                <div className="chemistPage__container__image">
                                    <img src={image} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="chemistPage__Section">
                            <div className="chemistPage__Section__container">
                                <div className="chemistPage__container__image">
                                    <img src={image2} alt="" />
                                </div>
                            </div>
                            <div className="chemistPage__Section__container  container__underline">
                                <div className="chemistPage__container__text">
                                    <div className="chemistPage__container__textTitle">
                                        <h2>APLIKACJA</h2>
                                    </div>
                                    <p>
                                        Pobierz aplikację Drogerie Polskie ze sklepu <a href="https://play.google.com/store/apps/details?id=pl.loyaltypoint.drogeriepolskie&hl=pl" target="_blank">Google Play</a> lub <a href="https://apps.apple.com/pl/app/klub-dp/id1440464943?l=pl" target="_blank">App Store</a>
                                        , zarejestruj się i korzystaj z przyznanych profitów wartościwych dla Ciebie. Zapraszamy do korzystania z super cen znajdujących się w naszych gazetkach promocyjnych.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="chemistPage__Section">

                        </div>
                    </div>
                </div>
                <Footer active={"chemistPage"}/>
            </div>
        )
    }
}

export default AboutPage