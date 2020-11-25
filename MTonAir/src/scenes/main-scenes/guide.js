import React from 'react';
import { Text } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

/**
 * Guide component that displays into a scrollview various elements
 * about the application, the measures, etc.
 */
const Guide = ({navigation}) => 
{
    /**@type {NavigationScreenProp} */
    const _navigation = navigation;

    return(
        <Text>Hello from guide page !</Text>
    );
};

export default Guide;