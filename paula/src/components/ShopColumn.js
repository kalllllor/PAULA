import React, { Component } from 'react'
import "../styles/components/shopColumn.css"

class ShopColumn extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (

            <div className="shopColumn">
                    <h2>{this.props.data.title}</h2>
            </div>
        )
    }
}

export default ShopColumn