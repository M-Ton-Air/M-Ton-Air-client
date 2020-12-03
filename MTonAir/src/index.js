import React from 'react';
import 'react-native-gesture-handler';

import { LandingWrapper } from 'mta_scenes/index';
import { SignIn, SignUp, SignInWithGoogle} from 'mta_scenes/index';
import { TermsOfUse, PrivacyPolicy } from 'mta_scenes/index'
import { LocationAccess } from 'mta_scenes/index';
import { Home, Search, StationDetails } from 'mta_scenes/index'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

const MTonAirApp = () => 
(
    <NavigationContainer>
        <Stack.Navigator>
            {/* Landing Page */}
            {/* TODO : NAVIGATE USER INSTANTLY TO MAP IF LOCAL STORAGE CONTAINS ITS INFORMATION = auto login user
            if he already logged in once */ }
            <Stack.Screen name="LandingWrapper" 
            component={LandingWrapper}
            options={{headerShown:false}}/>

            {/* sign up & sign in pages */}
            <Stack.Screen name="SignUp" component={SignUp} options={{title:'Sign up'}}/>
            <Stack.Screen name="SignIn" component={SignIn} options={{title:'Sign in'}}/>
            <Stack.Screen name="SignInWithGoogle" component={SignInWithGoogle} options={{title:'Google authentication'}}/>

            {/* legal mentions */}
            <Stack.Screen name="TermsOfUse" component={TermsOfUse} options={{title:'Terms of use'}}/>
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{title:'Privacy policy'}}/>

            {/* location access*/}
            <Stack.Screen name="LocationAccess" component={LocationAccess} options={{title:'Grant location access', headerShown:false}}/>

            {/* stack main screen wrapper -> contains all the app pages cf wireframe */}
            <Stack.Screen name="Home" component={Home} options={{title:'Home', headerShown:false}}/> 

            <Stack.Screen name="Search" component={Search} options={{title:'Search'}}/>
            <Stack.Screen name="StationDetails" component={StationDetails} options={{title:'Station details'}}/>

        </Stack.Navigator>
    </NavigationContainer>

);

export default MTonAirApp;