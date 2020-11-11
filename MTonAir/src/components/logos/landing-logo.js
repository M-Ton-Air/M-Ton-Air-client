import React from 'react';
import {Image} from 'react-native';
import landingPageStyles from 'mta_styles/landing-page-styles.js';

const aqi_logo = '../../assets/img/landing-page/landing-1-aqi.png';
const real_time_weather_logo = '../../assets/img/landing-page/landing-2-weather.png';
const data_logo = '../../assets/img/landing-page/landing-3-data.png';
const ready_logo = '../../assets/img/landing-page/landing-4-ready.png';

const LandingLogo = (props) =>
(
    renderImageAccordingToNumber(props.pageNumber)
);

function renderImageAccordingToNumber(number)
{
    switch(number)
    {
        case 1:
            return (<Image source={require(aqi_logo)} style={landingPageStyles.descriptiveLogo}/>);
        case 2:
            return (<Image source={require(real_time_weather_logo)} style={landingPageStyles.descriptiveLogo}/>);
        case 3:
            return (<Image source={require(data_logo)} style={landingPageStyles.descriptiveLogo}/>);
        case 4:
            return (<Image source={require(ready_logo)} style={landingPageStyles.descriptiveLogo}/>);
        default:
            console.log('wrong number parameter for logo (exceeds 4).');
            return null;
    }
}

export default LandingLogo;