import React from "react";
import Menu from "../components/Menu";
import { producersData } from "../data/producersData";
import { producersData2 } from "../data/producersData";
import "../styles/pages/producersPage.css";

class ContactPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="producersPage">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#d8d8d8"
            fill-opacity="1"
            d="M0,96L24,85.3C48,75,96,53,144,80C192,107,240,181,288,218.7C336,256,384,256,432,245.3C480,235,528,213,576,218.7C624,224,672,256,720,272C768,288,816,288,864,293.3C912,299,960,309,1008,298.7C1056,288,1104,256,1152,218.7C1200,181,1248,139,1296,133.3C1344,128,1392,160,1416,176L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          ></path>
        </svg>
        <Menu active="producersPage" before={this.props.location.before} />
        <div style={{ borderTop: "solid 1.5rem #FCC700" }}>
          <div className="producersPage__title">
            <h1>PRODUCENCI</h1>
          </div>
          <div className="producersPage__description">
            <p>
              Wieloletnia współpraca z najważniejszymi producentami na rynku,
              pozwala nam nie tylko oferować materiały po korzystnych cenach,
              ale także wdrażać wspólnie nowe, innowacyjne technologie.
            </p>
            <h2>Jesteśmy dystrybutorem produktów firm:</h2>
          </div>
          <div className="producersPage__content">
            {producersData.map((item) => {
              return (
                <div className="producersPage__Section">
                  <img
                    src={require(`../img/producers/${item.favicon}`)}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
          <div className="producersPage__description">
            <h2>Posiadamy również mieszalniki tynków i farb firm:</h2>
          </div>
          <div className="producersPage__content">
            {producersData2.map((item) => {
              return (
                <div className="producersPage__Section">
                  <img
                    src={require(`../img/producers/${item.favicon}`)}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
