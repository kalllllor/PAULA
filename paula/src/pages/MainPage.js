import React, { Component } from "react"
import Menu from "../components/Menu"
import Slider from "../components/Slider"
import AboutColumn from "../components/AboutColumn"
import { aboutData } from "../data/aboutData"
import "../styles/pages/mainPage.css"

class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            width: window.innerWidth,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {
        return (
            <div className="mainPage">
                <Menu active="mainPage" before={this.props.location.before} />
                <Slider />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d8d8d8" fill-opacity="1" d="M0,256L24,240C48,224,96,192,144,160C192,128,240,96,288,96C336,96,384,128,432,133.3C480,139,528,117,576,106.7C624,96,672,96,720,133.3C768,171,816,245,864,266.7C912,288,960,256,1008,213.3C1056,171,1104,117,1152,117.3C1200,117,1248,171,1296,202.7C1344,235,1392,245,1416,250.7L1440,256L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
                <div className="mainPage__aboutTitle mainPage__aboutFirst">
                    <h2>KIM JESTEŚMY</h2>
                </div>
                <div className="mainPage__aboutDescription">
                    <p>Nasza hurtownia PAULA powstała ponad 20 lat temu, a dokładniej w 1998 w Słomnikach. Z roku na rok nasza oferta uległa rozbudowie, tak aby w maksymalnym stopniu dostosować ją do potrzeb naszych klientów. Z czasem zdobywaliśmy zaufanie coraz większej liczby klientów (ponad 20 tysięcy), a dziś dostarczamy materiały do odbiorców w całej Małopolsce i nie tylko.W 2010 roku powstał nasz drugi oddział w Miechowie.W tej chwili proponujemy gamę materiałów budowlanych, od materiałów fundamnetowych, poprzez ceramikę ścienną, pokrycia dachowe, aż po materiały wykończeniowe. W Słomnikach mamy również hurtownię instalacyjną PAULA II WOD-KAN C.O. GAZ, która również postała w 1998 roku i oferuje niezbędne materiały potrzebne do budowy infrastruktury podziemnej w zakresie sieci wodno-kanalizacyjnych, gazowych oraz pełen asortyment do wewnętrznych instalacji.Reasumując, nasze hurtownie zajmują się kompleksowym zaopatrzeniem materiałowym firm wykonawczych i klientów indywidualnych.</p>
                </div>
                <div className="mainPage__aboutTitle mainPage__aboutSecond">
                    <h2>CO NAS CECHUJE</h2>
                </div>
                <div className="mainPage__About">

                    {aboutData.map(item => {
                        return (<AboutColumn data={item} />)
                    })}
                </div>
            </div>
        )
    }
}

export default MainPage