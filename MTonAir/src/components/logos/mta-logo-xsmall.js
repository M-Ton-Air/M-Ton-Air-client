import React from 'react';
import {Image} from 'react-native';
import signInUpStyles from 'mta_styles/sign-in-up-styles.js';

import mta_logo from 'mta_assets/img/m-ton-air.png';


const MtaLogoXSmall = () =>
(
    <Image source={mta_logo} style={signInUpStyles.mtaLogoXSmall}/>
);
export default MtaLogoXSmall;