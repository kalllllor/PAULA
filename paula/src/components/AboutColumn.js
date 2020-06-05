import React, { Component } from 'react'
import "../styles/components/aboutColumn.css"
import hammer from "../img/hammer.png"
import customer from "../img/customer.png"
import discount from "../img/discount.png"
import transport from "../img/transport.png"
class AboutColumn extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="aboutColumn">
                <div className="aboutColumn__icon" >
                    <img src={this.props.data.icon} />
                </div>
                <div className="aboutColumn__title">
                    <h2>{this.props.data.title}</h2>
                </div>
                <div className="aboutColumn__description">
                    <p>{this.props.data.description}</p>
                </div>
            </div>
        )
    }
}

export default AboutColumn