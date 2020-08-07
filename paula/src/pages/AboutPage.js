import React from "react";
import Menu from "../components/Menu";
import "../styles/pages/aboutPage.css";

import image1 from "../img/photos/PAULA1ABOUT.jpg";
import image2 from "../img/photos/PAULA2.jpg";
import image3 from "../img/photos/PAULA3.jpg";

class AboutPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className="aboutPage">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#d8d8d8"
              fill-opacity="1"
              d="M0,256L24,229.3C48,203,96,149,144,154.7C192,160,240,224,288,213.3C336,203,384,117,432,117.3C480,117,528,203,576,229.3C624,256,672,224,720,192C768,160,816,128,864,122.7C912,117,960,139,1008,154.7C1056,171,1104,181,1152,160C1200,139,1248,85,1296,90.7C1344,96,1392,160,1416,192L1440,224L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
            ></path>
          </svg>
          <Menu active="aboutPage" before={this.props.location.before} />
          <div style={{ borderTop: "solid 1.5rem #FCC700" }}>
            <div className="aboutPage__title">
              <h1>O NAS</h1>
            </div>
            <div className="aboutPage__Section">
              <div className="aboutPage__Section__container aboutPage__container__underline">
                <div className="aboutPage__container__text">
                  <div className="aboutPage__container__textTitle">
                    <h2>DOŚWIADCZENIE</h2>
                  </div>
                  <p>
                    Hurtownie PAULA to przede wszystkim doradcy budowlani z
                    wieloletnim, praktycznym doświadczeniem w branży
                    zapewniający doradctwo i fachowe wyliczenie ilości
                    materiałów budowlanych niezbędnych do budowy domu, od
                    fundamentu aż po dach.
                  </p>
                </div>
              </div>
              <div className="aboutPage__Section__container">
                <div className="aboutPage__container__image">
                  <img src={image1} alt="" />
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
                  <p>
                    W działalności naszej firmy przykładamy szczególną uwagę do
                    fachowości, rzetelności, terminowości oraz solidności.
                    Budując wizerunek firmy w oparciu o te cechy zyskujemy coraz
                    większe zaufanie naszych klientów - zarówno dostawców jak i
                    odbiorców. Dowodem tego są różne wyróżnienia od producentów.
                  </p>
                </div>
              </div>
            </div>
            <div className="aboutPage__Section">
              <div className="aboutPage__Section__container aboutPage__container__underline">
                <div className="aboutPage__container__text">
                  <div className="aboutPage__container__textTitle">
                    <h2>NISKIE CENY</h2>
                  </div>
                  <p>
                    Wieloletnia współpraca z najważniejszymi producentami na
                    rynku, pozzwala nam nie tylko oferować materiały po
                    korzystnych cenach, ale także wdrażać wspólnie nowe,
                    innowacyjne technologie.
                  </p>
                </div>
              </div>
              <div className="aboutPage__Section__container">
                <div className="aboutPage__container__image">
                  <img src={image3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
