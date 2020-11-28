import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {LandingOne, LandingGlobal} from 'mta_scenes/index';
import {StringResources} from 'mta_assets/index';


const Tab = createMaterialTopTabNavigator();

/**
 * Displays the main elements for the landing page, into a tab navigator
 */
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
                           title={StringResources.realTimeWeatherTitle()}
                           text={StringResources.realTimeWeatherText()}
                           nextPage='LandingThree'
                           navigation={navigation}/>
        } />
        
        <Tab.Screen name='LandingThree' children=
        { () =>
            <LandingGlobal pageNumber={3}
                           title={StringResources.reliableDataTitle()}
                           text={StringResources.reliableDataText()}
                           nextPage='LandingFour'
                           navigation={navigation}/>
        } />

        <Tab.Screen name='LandingFour' children=
        { () => 
            <LandingGlobal pageNumber={4}
                           title = {StringResources.readyTitle()}
                           text={StringResources.readyText()}
                           isLast={true}
                           navigation={navigation}
                           nextPage={null/* //TODO make next page = location access (because user clicked SKIP) with
                           a global.user in param that is a custom "everybody" user*/}/>
        } />
  </Tab.Navigator>
);
export default LandingWrapper;