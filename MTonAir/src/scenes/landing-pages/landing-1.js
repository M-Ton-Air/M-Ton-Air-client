import React from 'react';
import { ImageBackground, Text, View, ScrollView} from 'react-native';
import landingPageStyles from 'mta_styles/landing-page-styles.js';
import {MtaLogo, LandingLogo, SignUpButton, NextText} from 'mta_components/index';

const background = '../../assets/img/landing-page/background.png';

const LandingOne = ({navigation}) => 
(        
        <View style={landingPageStyles.container}>
            <ImageBackground source={require(background)} style={landingPageStyles.bImg}>
                <Text style={landingPageStyles.welcomeText}>
                    Welcome !
                </Text>
                <MtaLogo isWelcomePage={true}/>
                <LandingLogo pageNumber={1}/>
                <Text style={landingPageStyles.featureTitle}>
                    Air Quality Indexes
                </Text>
                <Text style={landingPageStyles.featureText}>
                    Air Quality Indexes, all around the world. Know more {"\n"} 
                    about the Air Quality around you.
                </Text>

                <SignUpButton navigation={navigation} 
                    buttonText='Sign up now' 
                    nextPage='SignUp'/>
                <NextText navigation={navigation} nextPage='LandingTwo'/>
                
            </ImageBackground>
        </View>
);


export default LandingOne;