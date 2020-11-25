import React from 'react';
import { ImageBackground, Text, View} from 'react-native';
import landingPageStyles from 'mta_styles/landing-page-styles.js';
import {MtaLogo, LandingLogo, SignUpButton, NextText} from 'mta_components/index';

const background = '../../assets/img/landing-page/background.png';

const LandingGlobal = (props) => 
(
<View style={landingPageStyles.container}>
    <ImageBackground source={require(background)} style={landingPageStyles.bImg}>
        <MtaLogo isWelcomePage={false}/>
        <LandingLogo pageNumber={props.pageNumber}/>
        <Text style={landingPageStyles.featureTitle}>
            {props.title}
        </Text>
        <Text style={landingPageStyles.featureText}>
            {props.text}
        </Text>
        <View style={landingPageStyles.horizontalView}/>
        <SignUpButton navigation={props.navigation} buttonText='Sign up now' nextPage='SignUp'/>
        <NextText navigation={props.navigation} nextPage={props.nextPage} isLast={props.isLast}/>
        
    </ImageBackground>
</View>
);

export default LandingGlobal;