import React from 'react';
import 'react-native-gesture-handler';
import {SignIn, SignUp } from 'mta_scenes/index';
import {LandingWrapper} from 'mta_scenes/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MTonAirApp = () => 
(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="LandingWrapper" 
            component={LandingWrapper}
            options={{headerShown:false}}
            />
            <Stack.Screen name="SignUp" component={SignUp} options={{title:'Sign up'}}/>
            <Stack.Screen name="SignIn" component={SignIn} options={{title:'Sign in'}}/>
            {/* stack location page */}
            {/* stack main screen wrapper -> contains all the app pages cf wireframe */}
        </Stack.Navigator>
    </NavigationContainer>

);

export default MTonAirApp;