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