import React from 'react';
import { Text } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

const FavoriteStations = ({navigation}) => 
{
    /**@type {NavigationScreenProp} */
    const _navigation = navigation;

    return(
        <Text>Hello from search FavoriteStations page !</Text>
    );
};

export default FavoriteStations;