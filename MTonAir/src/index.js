import React from 'react';
import 'react-native-gesture-handler';

import { LandingWrapper } from 'mta_scenes/index';
import { SignIn, SignUp, SignInWithGoogle} from 'mta_scenes/index';
import { TermsOfUse, PrivacyPolicy } from 'mta_scenes/index'
import { LocationAccess } from 'mta_scenes/index';
import { Home, Search } from 'mta_scenes/index'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import global from 'mta_utils/global';
import { UserEntity } from 'mta_models/index';

 ////////////////////////////////////////////// REMOVE IN PRODUCTION //////////////////////////////////////////////
////////////////////////////////////////////// REMOVE IN PRODUCTION //////////////////////////////////////////////
 // MOCK {//TODO : REMOVE IN PROD}
 global.user = new UserEntity
 ("Dorian",
 "Test",
 "dorian.na@gmail.com",
 "123456789");
 global.user.jwt = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkb3JpYW4ubmFAZ21haWwuY29tIiwiZXhwIjoxNjA2OTk4Njc0LCJpYXQiOjE2MDY5NTU0NzR9.yXrsR0LcQBds2sDhoRlskoErQWtCPfpfbbZ-bAOZNcdj4O8yVMw6Vh2Az4NvRYKEk6b2h9jPbGKZooDdhFcUxg";
 global.user.id = 111;
const Stack = createStackNavigator();

const MTonAirApp = () => 
(
    <NavigationContainer>
        <Stack.Navigator>

            {/* DEV - TODO - REMOVE */}
            {/* TODO - REMOVE */}
            {/* TODO - REMOVE */}
            {/* TODO - REMOVE */}
            {/* TODO - REMOVE */}
            <Stack.Screen name="Home" component={Home} options={{title:'Home', headerShown:false}}/> 

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
            {/* PROD */}
            {/* ********************************************************** */}
             {/* <Stack.Screen name="Home" component={Home} options={{title:'Home', headerShown:false}}/>  */}

            <Stack.Screen name="Search" component={Search} options={{title:'Search'}}/>

        </Stack.Navigator>
    </NavigationContainer>

);

export default MTonAirApp;