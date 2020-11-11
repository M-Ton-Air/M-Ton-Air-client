import React from 'react';
import 'react-native-gesture-handler';
//import {LandingOne, LandingTwo, LandingThree, LandingFour} from mta_scenes
import {SignIn, SignUp } from 'mta_scenes';
import {LandingWrapper} from 'mta_scenes';
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
            {/*}
            <Stack.Screen
            name="Welcome"
            component={LandingOne}
            options={{headerShown:false}}
            />
            <Stack.Screen name="LandingTwo" component={LandingTwo}/>
            <Stack.Screen name="LandingThree" component={LandingThree}/>
            <Stack.Screen name="LandingFour" component={LandingFour}/>
            */}
            <Stack.Screen name="SignUp" component={SignUp} options={{title:'Sign Up'}}/>
            <Stack.Screen name="SignIn" component={SignIn} options={{title:'Sign In'}}/>
        </Stack.Navigator>
    </NavigationContainer>

);

export default MTonAirApp;