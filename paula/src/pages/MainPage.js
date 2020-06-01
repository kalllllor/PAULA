import React, { Component } from "react"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import Slider from "../components/Slider"
import AboutColumn from "../components/AboutColumn"
import ShopColumn from "../components/ShopColumn"
import { aboutData } from "../data/aboutData"
import { shopsData } from "../data/shopsData"
import "../styles/pages/mainPage.css"

class MainPage extends React.Component {
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
            <div className="mainPage">
                <Menu active = "mainPage" before={this.props.location.before} />
                <Slider />
                <div className="mainPage__aboutTitle mainPage__aboutFirst">
                    <h2>KIM JESTEŚMY</h2>
                </div>
                <div className="mainPage__aboutDescription">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lorem, efficitur nec metus et, congue posuere risus. Duis tristique facilisis purus eleifend rutrum. Mauris in laoreet felis, nec malesuada turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed mollis at odio ac rutrum. Sed felis ipsum, mattis vel egestas nec, vehicula ac risus. Cras vel justo sagittis, tincidunt est eu, ullamcorper sem. Sed fringilla ac sapien at pellentesque. Morbi sit amet turpis sapien. Sed feugiat, magna non dictum hendrerit, sapien dolor fringilla sem, convallis elementum nulla urna nec nibh. Suspendisse ut pretium augue. Vivamus sed malesuada velit.</p>
                </div>
                <div className="mainPage__aboutTitle mainPage__aboutSecond">
                    <h2>CO NAS CECHUJE</h2>
                </div>
                <div className="mainPage__About">

                    {aboutData.map(item => {
                        return (<AboutColumn data={item} />)
                    })}
                </div>
                <Footer />
            </div>
        )
    }
}

export default MainPage