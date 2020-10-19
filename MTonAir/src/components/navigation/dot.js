import React from 'react';
import {Image} from 'react-native';
import landingPageStyles from 'mta_styles/landing-page-styles.js';

const active_dot = '../../assets/img/landing-page/active-page.png';
const inactive_dot = '../../assets/img/landing-page/inactive-page.png';


const Dot = (props) =>
(
    // If active is set to true, then the dot will appear as active. Otherwise, it will appear as inactive.
    <Image source={props.active ? require(active_dot) : require(inactive_dot)} style={props.active ? landingPageStyles.activeDot : landingPageStyles.dot}/>
);

export default Dot;
