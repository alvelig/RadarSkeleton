import React, { Component, PropTypes } from 'react';

import { withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";

import _ from "lodash";

const generatePolyLine = (latLng) => {
    let array = [ ];

    for(var i=0; i<1000; i++) {
        const lat = Math.random() / 10000;
        const lng = Math.random() / 10000;
        latLng.lat += lat//Math.random() > 0.5 ? -1*lat : lat;
        latLng.lng += lng//Math.random() > 0.5 ? -1*lng : lng;
        array.push({ ...latLng })
    };

    return array;
};

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Loaded using async loader.
 */
const AsyncGettingStartedExampleGoogleMap = _.flowRight(
    withScriptjs,
    withGoogleMap,
)(props => (
    <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={20}
        defaultCenter={{ lat: -33.4194425, lng: -70.6134063 }}
        onClick={props.onMapClick}
    >
        <Polyline path={generatePolyLine({ lat: -33.4194425, lng: -70.6134063 })} />
    </GoogleMap>
));

class Radar extends Component {

    state = {
        markers: [{
            position: {
                lat: 25.0112183,
                lng: 121.52067570000001,
            },
            key: `Taiwan`,
            defaultAnimation: 2,
        }],
    }

    handleMapLoad = this.handleMapLoad.bind(this);
    handleMapClick = this.handleMapClick.bind(this);
    handleMarkerRightClick = this.handleMarkerRightClick.bind(this);

    handleMapLoad(map) {
        this._mapComponent = map;
        if (map) {
            console.log(map.getZoom());
        }
    }

    /*
     * This is called when you click on the map.
     * Go and try click now.
     */
    handleMapClick(event) {
        const nextMarkers = [
            ...this.state.markers,
            {
                position: event.latLng,
                defaultAnimation: 2,
                key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
            },
        ];
        this.setState({
            markers: nextMarkers,
        });

        if (nextMarkers.length === 3) {
            alert(
                `Right click on the marker to remove it`,
                `Also check the code!`
            );
        }
    }

    handleMarkerRightClick(targetMarker) {
        /*
         * All you modify is data, and the view is driven by data.
         * This is so called data-driven-development. (And yes, it's now in
         * web front end and even with google maps API.)
         */
        const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
        this.setState({
            markers: nextMarkers,
        });
    }

    render() {
        return (
            <AsyncGettingStartedExampleGoogleMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg"
                loadingElement={
                    <div style={{ height: `100%` }}>
                        Loading...
                    </div>
                }
                containerElement={
                    <div style={containerStyle} />
                }
                mapElement={
                    <div style={{ height: `100%` }} />
                }
                onMapLoad={this.handleMapLoad}
                onMapClick={this.handleMapClick}
                markers={this.state.markers}
                onMarkerRightClick={this.handleMarkerRightClick}
            />
        );
    }
}

const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
};

export default Radar;