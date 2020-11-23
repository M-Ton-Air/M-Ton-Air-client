import React from 'react';
import {Image} from 'react-native';
import location_logo from 'mta_assets/img/landing-page/location.png';

const LocationLogo = (props) =>
(
    <Image source={location_logo} style={props.style}/>
);

export default LocationLogo;