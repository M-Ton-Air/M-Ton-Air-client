import React from 'react';
import { ImageBackground, Text, View} from 'react-native';
import landingPageStyles from 'mta_styles/landingPageStyles.js'
import {MtaLogo, AqiLogo} from 'mta_components';

const background = '../../../assets/img/landing-page/background.png';
//const mta_logo = '../../../assets/img/m-ton-air.png';

const LandingOne = () => 
(

<View style={landingPageStyles.container}>
    <ImageBackground source={require(background)} style={landingPageStyles.bImg}>
        <Text style={landingPageStyles.welcomeText}>Welcome !</Text>
        <MtaLogo isWelcomePage={true}/>
        <AqiLogo />
        {/* //TODO : handle the text appearence : font size, titles, etc. + handle nav */}
        <Text>Air Quality Indexes</Text>
        <Text>Air Quality Indexes, all arouind the world. Know more</Text>
        <Text>about the Air Quality around you.</Text>
    </ImageBackground>
</View>
);

export default LandingOne;