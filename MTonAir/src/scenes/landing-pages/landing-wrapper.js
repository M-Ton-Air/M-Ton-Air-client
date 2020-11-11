import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {LandingOne, LandingGlobal} from 'mta_scenes';

const Tab = createMaterialTopTabNavigator();

const realTimeWeatherText = 
'Because when air quality is bad, you better know if\n' +
'there is powerful wind. Know the weather around you\n' +
'and anywhere in the world.';

const reliableData =
'At M\' Ton Air, we work with reliable data providers, so\n' +
'that what you see on the app is always up to date !';

const ready =
'We hope that you\'ll have a great time using our app.\n' +
'You can go on now and create an  account, that will\n' +
'allow you to save cities. Otherwise, just skip this step !';


const LandingWrapper = ({navigation}) =>
(
    <Tab.Navigator
        tabBarOptions=
        {{
            showLabel:false,
            tabStyle:
            {
                height:5
            }
        }}
    >
        <Tab.Screen name='LandingOne' component={LandingOne}>
        </Tab.Screen>

        <Tab.Screen name='LandingTwo'   children=
        { () =>
            <LandingGlobal pageNumber={2}
                           title='Real time weather'
                           text={realTimeWeatherText}
                           nextPage='LandingThree'
                           navigation={navigation}/>
        } />
        
        <Tab.Screen name='LandingThree' children=
        { () =>
            <LandingGlobal pageNumber={3}
                           title='Reliable data'
                           text={reliableData}
                           nextPage='LandingFour'
                           navigation={navigation}/>
        } />

        <Tab.Screen name='LandingFour' children=
        { () => 
            <LandingGlobal pageNumber={4}
                           title = 'Ready ? Start the journey now !'
                           text={ready}
                           isLast={true}
                           navigation={navigation}
                           nextPage={null/* //TODO */}/>
        } />
  </Tab.Navigator>
);
export default LandingWrapper;