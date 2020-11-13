import React from 'react';
import {Image} from 'react-native';
import landingPageStyles from 'mta_styles/landing-page-styles.js';

import aqi_Logo from 'mta_assets/img/landing-page/landing-1-aqi.png';
import real_time_weather_logo from 'mta_assets/img/landing-page/landing-2-weather.png';
import data_logo from 'mta_assets/img/landing-page/landing-3-data.png';
import ready_logo from 'mta_assets/img/landing-page/landing-4-ready.png';

const LandingLogo = (props) =>
(
    renderImageAccordingToNumber(props.pageNumber)
);

function renderImageAccordingToNumber(number)
{
    switch(number)
    {
        case 1:
            return (<Image source={aqi_Logo} style={landingPageStyles.descriptiveLogo}/>);
        case 2:
            return (<Image source={real_time_weather_logo} style={landingPageStyles.descriptiveLogo}/>);
        case 3:
            return (<Image source={data_logo} style={landingPageStyles.descriptiveLogo}/>);
        case 4:
            return (<Image source={ready_logo} style={landingPageStyles.descriptiveLogo}/>);
        default:
            console.log('wrong number parameter for logo (exceeds 4).');
            return null;
    }
}

export default LandingLogo;