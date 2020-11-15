import React from 'react';
import 'react-native-gesture-handler';
import { LandingWrapper, SignIn, SignUp, TermsOfUse, PrivacyPolicy } from 'mta_scenes/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MTonAirApp = () => 
(
    <NavigationContainer>
        <Stack.Navigator>
            {/* Landing Page */}
            <Stack.Screen name="LandingWrapper" 
            component={LandingWrapper}
            options={{headerShown:false}}/>

            {/* sign up & sign in pages */}
            <Stack.Screen name="SignUp" component={SignUp} options={{title:'Sign up'}}/>
            <Stack.Screen name="SignIn" component={SignIn} options={{title:'Sign in'}}/>

            {/* legal mentions */}
            <Stack.Screen name="TermsOfUse" component={TermsOfUse} options={{title:'Terms of use'}}/>
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{title:'Privacy policy'}}/>

            {/* stack location page */}
            {/* stack main screen wrapper -> contains all the app pages cf wireframe */}
        </Stack.Navigator>
    </NavigationContainer>

);

export default MTonAirApp;