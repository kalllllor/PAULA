import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mapStyles: {
                width: "90%"
            }
        }
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={this.state.mapStyles}
                initialCenter={{ lat: 50.2401188, lng: 20.0842766 }}
            >
                <Marker position={{ lat: 50.2401188, lng: 20.0842766 }} />
            </Map>
        );
    }
}

export default MapContainer