import React from 'react';
import { Text } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

const StationDetails = ({ navigation}) => 
{
    /**@type {NavigationScreenProp} */
    const _navigation = navigation;

    return(
        <Text>Hello from stations DETAILS page ! </Text>
    );
};

export default StationDetails;