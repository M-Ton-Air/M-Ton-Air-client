import React from 'react';
import {Image} from 'react-native';
import landingPageStyles from 'mta_styles/landing-page-styles.js';

import mta_logo from 'mta_assets/img/m-ton-air.png';

const MtaLogo = (props) =>
(
    //if isWelcomePage is set to true, it will display the image with the mtaLogoWelcomePage style (i.e. in a smaller size).
    // Otherwise, it will display it larger.
    <Image source={mta_logo} style={props.isWelcomePage ? landingPageStyles.mtaLogoWelcomePage :landingPageStyles.mtaLogoNonWelcomePage }/>
);

export default MtaLogo;