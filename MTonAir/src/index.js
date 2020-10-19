import 'react-native-gesture-handler';
import React from 'react';
import {Navigator} from 'react-native';
import {LandingOne, LandingTwo, LandingThree, LandingFour, SignIn, SignUp} from 'mta_scenes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MTonAirApp = () => 
(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={LandingOne}
            options={{headerShown:false}}
            />
            <Stack.Screen name="About_MTA_2" component={LandingTwo}/>
            <Stack.Screen name="About_MTA_3" component={LandingThree}/>
            <Stack.Screen name="About_MTA_4" component={LandingFour}/>
            <Stack.Screen name="Sign_Up" component={SignUp} options={{title:'Sign Up'}}/>
            <Stack.Screen name="Sign_In" component={SignIn} options={{title:'Sign In'}}/>
        </Stack.Navigator>
    </NavigationContainer>

);

export default MTonAirApp;