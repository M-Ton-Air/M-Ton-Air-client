import React from 'react';
import { ImageBackground, Text, View, TouchableNativeFeedback} from 'react-native';
import landingPageStyles from 'mta_styles/landing-page-styles.js';
import {MtaLogo, AqiLogo, Dot} from 'mta_components';



const background = '../../assets/img/landing-page/background.png';

const LandingOne = ({navigation}) => 
(
    <View style={landingPageStyles.container}>
        <ImageBackground source={require(background)} style={landingPageStyles.bImg}>
            <Text style={landingPageStyles.welcomeText}>
                Welcome !
            </Text>
            <MtaLogo isWelcomePage={true}/>
            <AqiLogo />
            <Text style={landingPageStyles.featureTitle}>
                Air Quality Indexes
            </Text>
            <Text style={landingPageStyles.featureText}>
                Air Quality Indexes, all around the world. Know more {"\n"} 
                about the Air Quality around you.
            </Text>
           <View style={landingPageStyles.horizontalView}>
                <Dot active={true}/>
                <Dot/>
                <Dot/>
                <Dot/>
            </View>
            <TouchableNativeFeedback onPress={() => {goToSignInPage(navigation)}}>
                <View elevation={6} style={landingPageStyles.signUpNow}>
                    <Text style = {landingPageStyles.signUpNowText}>
                        Sign up now
                    </Text>
                </View>
            </TouchableNativeFeedback>

            <Text style={landingPageStyles.next}>
                NEXT
            </Text>
        </ImageBackground>
    </View>
);

//TODO : implement navigation between landing pages.

function goToSignInPage(navigation)
{
    navigation.navigate('Sign_Up')
}

export default LandingOne;