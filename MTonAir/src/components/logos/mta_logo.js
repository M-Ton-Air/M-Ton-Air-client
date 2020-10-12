import React from 'react';
import {Image} from 'react-native';
import landingPageStyles from 'mta_styles/landingPageStyles.js'

const mta_logo = '../../assets/img/m-ton-air.png';

const MtaLogo = (props) =>
(
    //if isWelcomePage is set to true, it will display the image with the mtaLogoWelcomePage style (i.e. in a smaller size).
    // Otherwise, it will display it larger.
    <Image source={require(mta_logo)} style={props.isWelcomePage ? landingPageStyles.mtaLogoWelcomePage :landingPageStyles.mtaLogoNonWelcomePage }/>
);

export default MtaLogo;