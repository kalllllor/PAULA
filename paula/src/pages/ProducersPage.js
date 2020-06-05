import React, { Component } from "react"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import { producersData } from "../data/producersData"
import "../styles/pages/producersPage.css"

class ContactPage extends React.Component {
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
            <div className="producersPage">
                <Menu active="producersPage" before={this.props.location.before} />
                <div style={{ borderTop: "solid 3vh #FCC700" }}>
                    <div className="producersPage__title" >
                        <h1>PRODUCENCI</h1>
                    </div>
                    <div className="producersPage__description">
                        <p>Wieloletnia współpraca z najważniejszymi producentami na rynku, pozwala nam nie tylko oferować materiały
                    po korzystnych cenach, ale także wdrażać wspólnie nowe, innowacyjne technologie.</p>
                        <h2>Jesteśmy dystrybutorem produktów firm:</h2>
                    </div>
                    <div className="producersPage__content">
                        {producersData.map(item => {
                            return (
                                <div className="producersPage__Section">
                                    <img src={require(`../img/producers/${item.favicon}`)} alt="" />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ContactPage