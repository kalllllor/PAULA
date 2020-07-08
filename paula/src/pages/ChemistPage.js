import React, { Component } from "react"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import "../styles/pages/chemistPage.css"
import image1 from "../img/photos/KOSM1.jpg"
import image2 from "../img/photos/KOSM2.jpg"
import image3 from "../img/photos/KOSM3.jpg"
import image4 from "../img/photos/KOSM4.jpg"
import image5 from "../img/photos/KOSM5.jpg"
import drogeriePolskieLogo from "../img/dp.png"
import googlePlay from "../img/bg-download-google.jpg"
import appStore from "../img/bg-download-apple.jpg"

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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffe2b6" fill-opacity="1" d="M0,96L24,112C48,128,96,160,144,149.3C192,139,240,85,288,69.3C336,53,384,75,432,85.3C480,96,528,96,576,106.7C624,117,672,139,720,160C768,181,816,203,864,186.7C912,171,960,117,1008,96C1056,75,1104,85,1152,122.7C1200,160,1248,224,1296,224C1344,224,1392,160,1416,128L1440,96L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
                    <div style={{ borderTop: "solid 1.5rem #fda525" }}>
                        <div className="chemistPage__title" >
                            <h1>DROGERIA</h1>
                        </div>
                        <div className="chemistPage__Section">
                            <div className="chemistPage__Section__container chemistPage__container__underline">
                                <div className="chemistPage__container__text">
                                    <div className="chemistPage__container__textTitle">
                                        <h2>DROGERIE POLSKIE</h2>
                                    </div>
                                    <p>W skład firmy PAULA wchodzi również sklep kosmetyczny DROGERIE POLSKIE powstały w 1998 roku. DP to najszybciej rozwijająca się sieć drogeryjna w Polsce. W naszym sklepie posiadamy bogaty asortyment kosmetyków, perfum, chemii i biżuterii w najlepszych cenach. Oferujemy profesjonalną obsługę klientów i doradztwo, które sprawiają, że zakupy w naszej drogerii są trafione, opłacalne i wartościowe. Nasza Drogeria gwarantuje dostęp do wyjątkowych personalizowanych ofert, usług i profitów w postaci super cen.</p>
                                </div>
                                <div className="chemistPage__container__web">
                                    <a href="https://drogeriepolskie.pl" target="_blank"><img src={drogeriePolskieLogo} alt="" />
                                        <h2>STRONA INTERNETOWA DROGERII POLSKICH</h2></a>
                                </div>
                            </div>
                            <div className="chemistPage__Section__container">
                                <div className="chemistPage__container__image">
                                    <img src={image5} alt="chemistImage1" />
                                </div>
                            </div>
                        </div>
                        <div className="chemistPage__Section">
                            <div className="chemistPage__Section__container">
                                <div className="chemistPage__container__image">
                                    <img src={image3} alt="chemistImage2" />
                                </div>
                            </div>
                            <div className="chemistPage__Section__container  container__underline">
                                <div className="chemistPage__container__text">
                                    <div className="chemistPage__container__textTitle">
                                        <h2>APLIKACJA MOBILNA</h2>
                                    </div>
                                    <p>
                                        Pobierz aplikację Drogerie Polskie ze sklepu Google Play lub App Store, zarejestruj się i korzystaj z przyznanych profitów wartościwych dla Ciebie. Zapraszamy do korzystania z super cen znajdujących się w naszych gazetkach promocyjnych.
                                    </p>

                                </div>
                                <div className="chemistPage__container__app">
                                    <div className="chemistPage__container__app__element">
                                        <a href="https://play.google.com/store/apps/details?id=pl.loyaltypoint.drogeriepolskie&hl=pl" target="_blank">
                                            <img src={googlePlay} alt="googleplay" />
                                            <div class="chemistPage__overlay" />
                                        </a>
                                    </div>
                                    <div className="chemistPage__container__app__element">
                                        <a href="https://apps.apple.com/pl/app/klub-dp/id1440464943?l=pl" target="_blank">
                                            <img src={appStore} alt="appstore" />
                                            <div class="chemistPage__overlay" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer active={"chemistPage"} />
            </div>
        )
    }
}

export default AboutPage