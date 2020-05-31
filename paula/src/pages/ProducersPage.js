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
    render() {
        return (
            <div className="producersPage">
                <Menu active="producersPage" before={this.props.location.before} />
                <div style={{ borderTop: "solid 3vh #FCC700" }}>
                    <div className="producersPage__title" >
                        <h1>PRODUCENCI</h1>
                    </div>
                <div className="producersPage__description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lorem, efficitur nec metus et, congue posuere risus. Duis tristique facilisis purus eleifend rutrum. Mauris in laoreet felis, nec malesuada turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed mollis at odio ac rutrum. Sed felis ipsum, mattis vel egestas nec, vehicula ac risus. Cras vel justo sagittis, tincidunt est eu, ullamcorper sem. Sed fringilla ac sapien at pellentesque. Morbi sit amet turpis sapien. Sed feugiat, magna non dictum hendrerit, sapien dolor fringilla sem, convallis elementum nulla urna nec nibh. Suspendisse ut pretium augue. Vivamus sed malesuada velit.</p>
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