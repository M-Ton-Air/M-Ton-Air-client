import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Map, FavoriteStations, Guide } from 'mta_scenes/index';
import { Icon } from 'react-native-elements' 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

/**
 * The home component is a wrapper for
 * all the main scenes elements. It displays the LocationAccess component if the user
 * removed android rights for location.
 * 
 * Home is composed of 3 main screens :
 * - Map
 * - Stations
 * - Guide
 */
const Home = ({navigation}) => 
{
    //const Tab = createBottomTabNavigator();
    const Tab = createMaterialTopTabNavigator();

    const lightBlue = '#1a96f8'
    const grey = '#606060'

    return(
        <Tab.Navigator
            tabBarPosition={'bottom'}
            initialRouteName="Map"
            backBehavior='initialRoute'
            tabBarOptions= 
            {{
                labelStyle: 
                { 
                    fontFamily: 'Product-Sans-Regular',
                    fontSize: 13
                },
                tabStyle:
                {
                    height:50
                },
                activeTintColor:    lightBlue,
                inactiveTintColor:  grey,
                showIcon:true
            }}>
            <Tab.Screen name="Map" component={Map} options= {{ tabBarIcon: ({focused, color}) =>
            {
                return <Icon name='language' type='material' color={color}/>;
            }}}/>
            <Tab.Screen name="Stations" component={FavoriteStations} options= {{ tabBarIcon: ({focused, color}) =>
            {
                return <Icon name='map-pin' type='feather' color={color}/>;
            }}}/>
            <Tab.Screen name="Guide" component={Guide}options= {{ tabBarIcon: ({focused, color}) =>
            {
                return <Icon name='help' type='material' color={color}/>;
            }}}/>
        </Tab.Navigator>
        // <Tab.Navigator
        //     screenOptions={({ route }) => 
        //     ({
        //         tabBarIcon: ({ focused, color, size }) => 
        //         {
        //             let iconName;
        //             let iconColor;
        //             let type = 'material';
        //             if(route.name === "Map")
        //             {
        //                 iconName = 'language';
        //                 iconColor = focused ? lightBlue : grey;
        //             }
        //             else if(route.name === "Stations")
        //             {
        //                 iconName = 'map-pin';
        //                 iconColor = focused ? lightBlue : grey;
        //                 type = 'feather'
        //             }
        //             else if(route.name === "Guide")
        //             {
        //                 iconName = 'help';
        //                 iconColor = focused ? lightBlue : grey;
        //             }

        //             return <Icon name={iconName} type={type} color={iconColor}/>
        //         }
        //     })}
        //     tabBarOptions=
        //     {{
        //         activeTintColor: lightBlue,
        //         inactiveTintColor: grey,
        //         labelStyle:
        //         {
        //             fontFamily:'Product-Sans-Regular',
        //             fontSize:13
        //         }
        //     }}>
        //     <Tab.Screen name="Map" component={Map}/>
        //     <Tab.Screen name="Stations" component={FavoriteStations}/>
        //     <Tab.Screen name="Guide" component={Guide}/>
        // </Tab.Navigator>
    );
};

export default Home;