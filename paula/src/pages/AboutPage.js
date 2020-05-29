import React, { Component } from "react"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import "../styles/pages/aboutPage.css"

class AboutPage extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {

        return (
            <div className="aboutPage">
                <Menu />

                <div className="aboutPage__title" >
                    <h1>O NAS</h1>
                </div>

                <div className="aboutPage__firstSection">
                    <div className="firstSection__container">
                        <div className="container__text">
                            <h2>tytuł 1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, massa ut fringilla pharetra, est ligula semper tellus, in vulputate neque dolor a nisi. Donec eu purus purus. Fusce ultricies nunc metus, pharetra elementum est fermentum vel. Vestibulum non tempor ipsum. Duis at turpis sapien. Donec condimentum iaculis est id egestas. Nulla pulvinar quis neque eget congue. Aliquam ullamcorper, enim id mollis varius, dolor risus mollis diam, elementum euismod nisl orci non ipsum. Praesent imperdiet, orci a egestas tincidunt, urna risus malesuada ante, vitae mollis magna sapien sit amet ex. Fusce a turpis massa.</p>
                        </div>
                    </div>
                    <div className="firstSection__container"></div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default AboutPage