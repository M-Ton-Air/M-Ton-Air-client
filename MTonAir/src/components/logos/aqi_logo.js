import React from 'react';
import {Image} from 'react-native';
import landingPageStyles from 'mta_styles/landingPageStyles.js'

const aqi_logo = '../../assets/img/landing-page/landing-1-aqi.png';

const AqiLogo = () =>
(
    <Image source={require(aqi_logo)} style={landingPageStyles.aqiLogo}/>
);

export default AqiLogo;